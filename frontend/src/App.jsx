import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import IncidentList from "./pages/Incidents/IncidentList";
import IncidentCreate from "./pages/Incidents/IncidentCreate";
import IncidentEdit from "./pages/Incidents/IncidentEdit";
import IncidentDetails from "./pages/Incidents/IncidentDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />

            {/* Protected Layout */}

            <Route
                path="/dashboard"
                element={
                    <Layout>
                        <Dashboard />
                    </Layout>
                }
            />

            <Route
                path="/incidents"
                element={
                    <Layout>
                        <IncidentList />
                    </Layout>
                }
            />

            <Route
                path="/incidents/new"
                element={
                    <Layout>
                        <IncidentCreate />
                    </Layout>
                }
            />

            <Route
                path="/incidents/:id"
                element={
                    <Layout>
                        <IncidentDetails />
                    </Layout>
                }
            />

            <Route
                path="/incidents/:id/edit"
                element={
                    <Layout>
                        <IncidentEdit />
                    </Layout>
                }
            />

            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default App;