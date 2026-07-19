from flask import request, jsonify

from app.services.auth_service import authenticate_user


def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    response, status = authenticate_user(email, password)

    return jsonify(response), status