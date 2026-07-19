from app.config.database import db
from app.models.incident import Incident

VALID_SEVERITIES = ["LOW", "MEDIUM", "HIGH", "CRITICAL"]


def create_incident(data):

    title = data.get("title")
    description = data.get("description")
    severity = data.get("severity")
    category = data.get("category")
    reported_by = data.get("reported_by")

    if not title:
        return {
            "success": False,
            "message": "Title is required"
        }, 400

    if not description:
        return {
            "success": False,
            "message": "Description is required"
        }, 400

    if severity not in VALID_SEVERITIES:
        return {
            "success": False,
            "message": "Invalid severity"
        }, 400

    if not category:
        return {
            "success": False,
            "message": "Category is required"
        }, 400

    if not reported_by:
        return {
            "success": False,
            "message": "Reported By is required"
        }, 400

    incident = Incident(
        title=title,
        description=description,
        severity=severity,
        category=category,
        reported_by=reported_by
    )

    db.session.add(incident)
    db.session.commit()

    return {
        "success": True,
        "message": "Incident created successfully",
        "incident": {
            "id": incident.id,
            "title": incident.title,
            "severity": incident.severity,
            "status": incident.status
        }
    }, 201


def get_all_incidents():

    incidents = Incident.query.order_by(
        Incident.created_at.desc()
    ).all()

    incident_list = []

    for incident in incidents:
        incident_list.append({
            "id": incident.id,
            "title": incident.title,
            "description": incident.description,
            "severity": incident.severity,
            "category": incident.category,
            "status": incident.status,
            "reported_by": incident.reported_by,
            "created_at": incident.created_at.isoformat(),
            "updated_at": incident.updated_at.isoformat()
        })

    return {
        "success": True,
        "count": len(incident_list),
        "incidents": incident_list
    }, 200

def get_incident_by_id(incident_id):

    incident = Incident.query.get(incident_id)

    if incident is None:
        return {
            "success": False,
            "message": "Incident not found"
        }, 404

    return {
        "success": True,
        "incident": {
            "id": incident.id,
            "title": incident.title,
            "description": incident.description,
            "severity": incident.severity,
            "category": incident.category,
            "status": incident.status,
            "reported_by": incident.reported_by,
            "created_at": incident.created_at.isoformat(),
            "updated_at": incident.updated_at.isoformat()
        }
    }, 200