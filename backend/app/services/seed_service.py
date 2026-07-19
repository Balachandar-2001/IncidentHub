from app.models.user import User
from app.config.database import db


def seed_admin_user():

    existing_user = User.query.filter_by(
        email="admin@incidenthub.com"
    ).first()

    if existing_user:
        print("✓ Administrator already exists.")
        return

    admin = User(
        name="Administrator",
        email="admin@incidenthub.com",
        password="password123",
        role="ADMIN"
    )

    db.session.add(admin)
    db.session.commit()

    print("✓ Administrator user created successfully.")