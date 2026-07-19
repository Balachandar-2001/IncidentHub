import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import IncidentForm from "../../components/incidents/IncidentForm";
import incidentService from "../../services/incidentService";

function IncidentEdit() {

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

    async function updateIncident(data) {

        try {

            await incidentService.updateIncident(id, data);

            alert("Incident updated successfully.");

            navigate("/incidents");

        }

        catch (error) {

            console.error(error);

            alert("Unable to update incident.");

        }

    }

    if (loading) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="incident-page">

            <h1>Edit Incident</h1>

            <IncidentForm
                initialData={incident}
                onSubmit={updateIncident}
                submitButtonText="Update Incident"
                onCancel={() => navigate("/incidents")}
            />

        </div>

    );

}

export default IncidentEdit;