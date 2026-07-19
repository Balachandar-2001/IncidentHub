from app.models.incident import Incident


def dashboard_summary():

    incidents = Incident.query.all()

    summary = {

        "open": 0,

        "in_progress": 0,

        "resolved": 0,

        "closed": 0,

        "total": len(incidents)

    }

    for incident in incidents:

        if incident.status == "OPEN":
            summary["open"] += 1

        elif incident.status == "IN_PROGRESS":
            summary["in_progress"] += 1

        elif incident.status == "RESOLVED":
            summary["resolved"] += 1

        elif incident.status == "CLOSED":
            summary["closed"] += 1

    return {

        "success": True,

        "summary": summary

    }, 200