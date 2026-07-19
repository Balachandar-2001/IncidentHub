from flask import jsonify

from app.services.dashboard_service import dashboard_summary


def get_summary():

    response, status = dashboard_summary()

    return jsonify(response), status