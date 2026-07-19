from flask import Blueprint

from app.controllers.incident_controller import create
from app.controllers.incident_controller import (
    create,
    get_all,
    get_by_id
)

from app.controllers.incident_controller import (
    create,
    get_all
)

incident_bp = Blueprint("incident", __name__)

incident_bp.route("", methods=["POST"])(create)

incident_bp.route("", methods=["GET"])(get_all)

incident_bp.route("/<int:incident_id>", methods=["GET"])(get_by_id)