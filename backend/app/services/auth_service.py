from app.models.user import User


def authenticate_user(email, password):

    print("authenticate_user() called")

    user = User.query.filter_by(email=email).first()

    print("User from DB:", user)

    if user is None:

        return {
            "success": False,
            "message": "Invalid email or passwordf"
        }, 401

    if user.password != password:

        return {
            "success": False,
            "message": "Invalid email or password"
        }, 401

    return {

        "success": True,

        "token": "dummy-jwt-token",

        "user": {

            "id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role

        }

    }, 200