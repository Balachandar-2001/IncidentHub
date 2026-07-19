from flask import request, jsonify

from app.services.incident_service import (
    create_incident,
    get_all_incidents
)

from app.services.incident_service import (
    create_incident,
    get_all_incidents,
    get_incident_by_id
)

from app.services.incident_service import create_incident


def create():

    data = request.get_json()

    response, status = create_incident(data)

    return jsonify(response), status

def get_all():

    response, status = get_all_incidents()

    return jsonify(response), status

def get_by_id(incident_id):

    response, status = get_incident_by_id(incident_id)

    return jsonify(response), status