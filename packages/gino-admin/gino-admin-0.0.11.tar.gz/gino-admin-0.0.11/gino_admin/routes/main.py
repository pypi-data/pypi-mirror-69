import os
from ast import literal_eval
from datetime import datetime
from typing import Text

import asyncpg
from sanic import response
from sanic.request import Request

from gino_admin import auth, config, utils
from gino_admin.core import admin
from gino_admin.routes.crud import model_view_table
from gino_admin.routes.logic import (count_elements_in_db, create_object_copy,
                                     deepcopy_recursive,
                                     drop_and_recreate_all_tables,
                                     insert_data_from_csv, render_model_view)

cfg = config.cfg
jinja = cfg.jinja


@admin.route(f"/")
@auth.token_validation()
async def bp_root(request):
    return jinja.render("index.html", request)


@admin.route("/logout", methods=["GET"])
async def logout(request: Request):
    request = auth.logout_user(request)
    return jinja.render("login.html", request)


@admin.route("/logout", methods=["POST"])
async def logout_post(request: Request):
    return await login(request)


@admin.route("/login", methods=["GET", "POST"])
async def login(request):
    _login = auth.validate_login(request, cfg.app.config)
    if _login:
        _token = utils.generate_token(request.ip)
        cfg.sessions[_token] = request.headers["User-Agent"]
        request.cookies["auth-token"] = _token
        request["session"] = {"_auth": True}
        _response = jinja.render("index.html", request)
        _response.cookies["auth-token"] = _token
        return _response
    else:
        request["flash"]("Password or login is incorrect", "error")
    return jinja.render("login.html", request)


@admin.route("/<model_id>/deepcopy", methods=["POST"])
@auth.token_validation()
async def model_deepcopy(request, model_id):
    """
    Recursively creates copies for the whole chain of entities, referencing the given model and instance id through
    the foreign keys.
    :param request:
    :param model_id:
    :return:
    """
    request_params = {key: request.form[key][0] for key in request.form}
    columns_data = cfg.models[model_id]["columns_data"]
    base_object_id = columns_data["id"]["type"](request_params["id"])

    try:
        new_base_obj_id = await deepcopy_recursive(
            cfg.models[model_id]["model"],
            base_object_id,
            new_id=request_params["new_id"],
        )
        request["flash"](
            f"Object with {request_params['id']} was deep copied with new id {new_base_obj_id}",
            "success",
        )
    except asyncpg.exceptions.PostgresError as e:
        request["flash"](e.args, "error")
    return await render_model_view(request, model_id)


@admin.route("/<model_id>/copy", methods=["POST"])
@auth.token_validation()
async def model_copy(request, model_id):
    """ route for copy item per row """
    model_data = cfg.models[model_id]
    request_params = {elem: request.form[elem][0] for elem in request.form}
    key = model_data["key"]
    try:
        new_obj_key = await create_object_copy(model_id, request_params[key])
        flash_message = (
            f"Object with {key} {request_params[key]} was copied with {key} {new_obj_key}",
            "success",
        )
    except asyncpg.exceptions.UniqueViolationError as e:
        flash_message = (
            f"Duplicate in Unique column Error during copy: {e.args}. \n"
            f"Try to rename existed id or add manual.",
            "error",
        )
    except asyncpg.exceptions.ForeignKeyViolationError as e:
        flash_message = (e.args, "error")
    return await model_view_table(request, model_id, flash_message)


@admin.route("/db_drop", methods=["GET"])
@auth.token_validation()
async def db_drop_view(request: Request):
    return jinja.render("db_drop.html", request, data=await count_elements_in_db())


@admin.route("/db_drop", methods=["POST"])
@auth.token_validation()
async def db_drop_run(request: Request):

    data = literal_eval(request.form["data"][0])
    count = 0
    for _, value in data.items():
        if isinstance(value, int):
            count += value
    await drop_and_recreate_all_tables()

    request["flash"](f"{count} object was deleted", "success")
    return jinja.render("db_drop.html", request, data=await count_elements_in_db())


@admin.route("/presets", methods=["GET"])
@auth.token_validation()
async def presets_view(request: Request):
    return jinja.render(
        "presets.html",
        request,
        presets_folder=cfg.presets_folder,
        presets=utils.get_presets()["presets"],
    )


@admin.route("/settings", methods=["GET"])
@auth.token_validation()
async def settings_view(request: Request):
    return jinja.render("settings.html", request, settings=utils.get_settings())


@admin.route("/presets/", methods=["POST"])
@auth.token_validation()
async def presets_use(request: Request):
    preset = utils.get_preset_by_id(request.form["preset"][0])
    if "with_db" in request.form:
        await drop_and_recreate_all_tables()
        request["flash"](f"DB was successful Dropped", "success")
    try:
        for model_id, file_path in preset["files"].items():
            request, code = await insert_data_from_csv(
                os.path.join(cfg.presets_folder, file_path), model_id.lower(), request
            )
        for message in request["flash_messages"]:
            request["flash"](*message)
    except FileNotFoundError:
        request["flash"](f"Wrong file path in Preset {preset['name']}.", "error")
    return jinja.render("presets.html", request, presets=utils.get_presets()["presets"])


@admin.middleware("request")
async def middleware_request(request):
    request["flash_messages"] = []


@admin.route("/<model_id>/upload/", methods=["POST"])
@auth.token_validation()
async def file_upload(request: Request, model_id: Text):
    if not os.path.exists(cfg.upload_dir):
        os.makedirs(cfg.upload_dir)
    upload_file = request.files.get("file_names")

    file_name = utils.secure_filename(upload_file.name)
    if not upload_file or not file_name:
        flash_message = ("No file chosen to Upload", "error")
        return await model_view_table(request, model_id, flash_message)
    if not utils.valid_file_size(upload_file.body, cfg.max_file_size):
        return response.redirect("/?error=invalid_file_size")
    else:
        file_path = f"{cfg.upload_dir}/{file_name}_{datetime.now().isoformat()}.{upload_file.type.split('/')[1]}"
        await utils.write_file(file_path, upload_file.body)
        request, code = await insert_data_from_csv(file_path, model_id, request)
        return await model_view_table(request, model_id, request["flash_messages"])


@admin.route("/sql_run", methods=["GET"])
@auth.token_validation()
async def sql_query_run_view(request):
    return jinja.render("sql_runner.html", request)


@admin.route("/sql_run", methods=["POST"])
@auth.token_validation()
async def sql_query_run(request):
    result = []
    if not request.form.get("sql_query"):
        request["flash"](f"SQL query cannot be empty", "error")
    else:
        sql_query = request.form["sql_query"][0]
        try:
            result = await cfg.app.db.status(cfg.app.db.text(sql_query))
        except asyncpg.exceptions.PostgresSyntaxError as e:
            request["flash"](f"{e.args}", "error")
    return jinja.render("sql_runner.html", request, columns=result[1], result=result[1])


@admin.route("/history", methods=["GET"])
@auth.token_validation()
async def history_display(request):
    # todo: in next versions
    history_data_columns = []
    history_data = []
    return jinja.render(
        "history.html",
        request,
        history_data_columns=history_data_columns,
        history_data=history_data,
    )
