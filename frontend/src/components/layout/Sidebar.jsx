import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive ? "menu active" : "menu"
                }
            >
                Dashboard
            </NavLink>

            <NavLink
                to="/incidents"
                className={({ isActive }) =>
                    isActive ? "menu active" : "menu"
                }
            >
                Incidents
            </NavLink>

        </aside>

    );
}

export default Sidebar;