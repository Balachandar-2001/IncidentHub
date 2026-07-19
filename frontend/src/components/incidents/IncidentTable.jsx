import { Link } from "react-router-dom";

import "./IncidentTable.css";

function IncidentTable({

    incidents,

    onDelete

}) {

    return (

        <table className="incident-table">

            <thead>

                <tr>

                    <th>Title</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Reported By</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {incidents.map((incident) => (

                    <tr key={incident.id}>

                        <td>{incident.title}</td>

                        <td>{incident.severity}</td>

                        <td>{incident.status}</td>

                        <td>{incident.category}</td>

                        <td>{incident.reported_by}</td>

                        <td className="action-buttons">

                            <Link
                                to={`/incidents/${incident.id}`}
                                className="view-btn"
                            >
                                View
                            </Link>

                            <Link
                                to={`/incidents/${incident.id}/edit`}
                                className="edit-btn"
                            >
                                Edit
                            </Link>

                            <button
                                className="delete-btn"
                                onClick={() => onDelete(incident.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default IncidentTable;