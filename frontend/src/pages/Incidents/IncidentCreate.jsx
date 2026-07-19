import { useNavigate } from "react-router-dom";

import IncidentForm from "../../components/incidents/IncidentForm";

import incidentService from "../../services/incidentService";

function IncidentCreate() {

    const navigate = useNavigate();

    async function createIncident(data) {

        try {

            await incidentService.createIncident(data);

            alert("Incident created successfully.");

            navigate("/incidents");

        }

        catch (error) {

            console.error(error);

            alert("Unable to create incident.");

        }

    }

    return (

        <div className="incident-page">

            <h1>Create Incident</h1>

            <IncidentForm
                onSubmit={createIncident}
                submitButtonText="Create Incident"
                onCancel={() => navigate("/incidents")}
            />

        </div>

    );

}

export default IncidentCreate;