import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import incidentService from "../../services/incidentService";

import "./Incident.css";

function IncidentDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [incident, setIncident] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadIncident();

    }, []);

    async function loadIncident() {

        try {

            const response = await incidentService.getIncidentById(id);

            setIncident(response.incident);

        }

        catch (error) {

            console.error(error);

            alert("Unable to load incident.");

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!incident) {

        return <h2>Incident not found.</h2>;

    }

    return (

        <div className="incident-page">

            <h1>Incident Details</h1>

            <div className="incident-form">

                <label>Title</label>
                <input value={incident.title} readOnly />

                <label>Description</label>
                <textarea
                    rows="4"
                    value={incident.description}
                    readOnly
                />

                <label>Severity</label>
                <input value={incident.severity} readOnly />

                <label>Status</label>
                <input value={incident.status} readOnly />

                <label>Category</label>
                <input value={incident.category} readOnly />

                <label>Reported By</label>
                <input value={incident.reported_by} readOnly />

                <label>Created At</label>
                <input value={incident.created_at} readOnly />

                <label>Updated At</label>
                <input value={incident.updated_at} readOnly />

                <div className="form-actions">

                    <button
                        className="cancel-btn"
                        onClick={() => navigate("/incidents")}
                    >
                        Back
                    </button>

                </div>

            </div>

        </div>

    );

}

export default IncidentDetails;