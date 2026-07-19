import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import incidentService from "../../services/incidentService";

import IncidentTable from "../../components/incidents/IncidentTable";
import DeleteDiag from "../../components/incidents/DeleteDiag";

import "./Incident.css";

function IncidentList() {

    const navigate = useNavigate();

    const [incidents, setIncidents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [selectedIncidentId, setSelectedIncidentId] = useState(null);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {

        loadIncidents();

    }, []);

    async function loadIncidents() {

        try {

            const response = await incidentService.getAllIncidents();

            setIncidents(response.incidents);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    function openDeleteDialog(id) {

        setSelectedIncidentId(id);

        setShowDeleteDialog(true);

    }

    function closeDeleteDialog() {

        setSelectedIncidentId(null);

        setShowDeleteDialog(false);

    }

    async function deleteIncident() {

        try {

            await incidentService.deleteIncident(selectedIncidentId);

            closeDeleteDialog();

            await loadIncidents();

        }

        catch (error) {

            console.error(error);

            alert("Unable to delete incident.");

        }

    }

    if (loading) {

        return <h2>Loading incidents...</h2>;

    }

    return (

        <div className="incident-page">

            <div className="page-header">

                <h1>Incident Management</h1>

                <button
                    className="create-btn"
                    onClick={() => navigate("/incidents/new")}
                >
                    + Create Incident
                </button>

            </div>

            <IncidentTable
                incidents={incidents}
                onDelete={openDeleteDialog}
            />

            <DeleteDiag
                isOpen={showDeleteDialog}
                onClose={closeDeleteDialog}
                onDelete={deleteIncident}
            />

        </div>

    );

}

export default IncidentList;