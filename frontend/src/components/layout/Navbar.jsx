import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                IncidentHub
            </div>

            <div className="navbar-user">
                <button className="logout-btn">
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Navbar;