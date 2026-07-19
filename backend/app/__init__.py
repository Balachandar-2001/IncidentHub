import os


from app.routes.incidents import incident_bp
from app.models.incident import Incident
from app.services.seed_service import seed_admin_user
from app.models.user import User
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

from app.config.database import db
from app.routes.auth import auth_bp
from app.routes.dashboard import dashboard_bp

load_dotenv()


def create_app():

    app = Flask(__name__)

    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_ECHO"] = True

    db.init_app(app)

    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    app.register_blueprint(
        incident_bp,
        url_prefix="/api/incidents"
    )

    app.register_blueprint(
    dashboard_bp,
    url_prefix="/api/dashboard"
)

    @app.route("/health")
    def health():
        return {
            "status": "UP",
            "service": "IncidentHub Backend"
        }

    with app.app_context():
        db.create_all()
        seed_admin_user()

    return app