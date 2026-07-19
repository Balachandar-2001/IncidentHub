import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = "Email is required";
        }

        if (!password.trim()) {
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setLoginError("");
        setLoading(true);

        try {

            const response = await api.post("/api/auth/login", {
                email,
                password
            });

            console.log(response.data);

            navigate("/dashboard");

        } catch (error) {

            if (error.response) {
                setLoginError(error.response.data.message);
            } else {
                setLoginError("Unable to connect to server");
            }

        } finally {
            setLoading(false);
        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>IncidentHub</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {errors.email &&
                            <span className="error">{errors.email}</span>
                        }

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {errors.password &&
                            <span className="error">{errors.password}</span>
                        }

                    </div>

                    {loginError &&
                        <p className="login-error">
                            {loginError}
                        </p>
                    }

                    <button type="submit" disabled={loading}>

                        {loading ? "Logging in..." : "Login"}

                    </button>

                </form>

                <p className="version">
                    Version 1.0
                </p>

            </div>

        </div>

    );

}

export default Login;