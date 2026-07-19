import { Routes, Route, Navigate } from "react-router-dom";

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

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/incidents" element={<IncidentList />} />

      <Route path="/incidents/new" element={<IncidentCreate />} />

      <Route path="/incidents/:id" element={<IncidentDetails />} />

      <Route path="/incidents/:id/edit" element={<IncidentEdit />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;