from flask import Blueprint

from app.controllers.dashboard_controller import get_summary

dashboard_bp = Blueprint("dashboard", __name__)

dashboard_bp.route(
    "/summary",
    methods=["GET"]
)(get_summary)