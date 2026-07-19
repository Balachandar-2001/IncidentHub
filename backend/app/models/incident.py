from datetime import datetime

from app.config.database import db


class Incident(db.Model):

    __tablename__ = "incidents"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(150), nullable=False)

    description = db.Column(db.Text, nullable=False)

    severity = db.Column(db.String(20), nullable=False)

    category = db.Column(db.String(50), nullable=False)

    status = db.Column(db.String(20), nullable=False, default="OPEN")

    reported_by = db.Column(db.String(100), nullable=False)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )