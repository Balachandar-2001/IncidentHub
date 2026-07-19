import { useEffect, useState } from "react";

import "./IncidentForm.css";

function IncidentForm({
    initialData,
    onSubmit,
    submitButtonText,
    onCancel
}) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        severity: "LOW",
        category: "Application",
        reported_by: ""
    });

    useEffect(() => {

        if (initialData) {
            setFormData(initialData);
        }

    }, [initialData]);

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value

        });

    }

    async function handleSubmit(event) {

        event.preventDefault();

        await onSubmit(formData);

    }

    return (

        <form
            className="incident-form"
            onSubmit={handleSubmit}
        >

            <label>Title</label>

            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <label>Description</label>

            <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />

            <label>Severity</label>

            <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
            >
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
                <option value="CRITICAL">CRITICAL</option>
            </select>

            <label>Category</label>

            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
            >
                <option>Application</option>
                <option>Database</option>
                <option>Infrastructure</option>
                <option>Networking</option>
                <option>Cloud</option>
                <option>Kubernetes</option>
                <option>Docker</option>
                <option>CI/CD</option>
                <option>Monitoring</option>
                <option>Security</option>
            </select>

            <label>Reported By</label>

            <input
                type="text"
                name="reported_by"
                value={formData.reported_by}
                onChange={handleChange}
                required
            />

            <div className="form-actions">

                <button
                    type="button"
                    className="cancel-btn"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="save-btn"
                >
                    {submitButtonText}
                </button>

            </div>

        </form>

    );

}

export default IncidentForm;