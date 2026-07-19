import { useEffect, useState } from "react";

import SummaryCard from "../../components/dashboard/SummaryCard";
import dashboardService from "../../services/dashboardService";

import "./Dashboard.css";

function Dashboard() {

    const [summary, setSummary] = useState({

        open: 0,
        in_progress: 0,
        resolved: 0,
        closed: 0,
        total: 0

    });

    useEffect(() => {

        loadSummary();

    }, []);

    async function loadSummary() {

        try {

            const response = await dashboardService.getSummary();

            setSummary(response.summary);

        }
        catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="summary-grid">

                <SummaryCard
                    title="Open"
                    count={summary.open}
                    color="#ef4444"
                />

                <SummaryCard
                    title="In Progress"
                    count={summary.in_progress}
                    color="#f59e0b"
                />

                <SummaryCard
                    title="Resolved"
                    count={summary.resolved}
                    color="#3b82f6"
                />

                <SummaryCard
                    title="Closed"
                    count={summary.closed}
                    color="#10b981"
                />

            </div>

        </div>

    );

}

export default Dashboard;