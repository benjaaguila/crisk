import React, { useState, useContext } from "react";
import './Login.css'
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
 
function Login() {
    const { token, setToken } = useContext(AuthContext);
    const { userId, setUserId } = useContext(AuthContext);
    const { username, setUsername } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log("Email: ", email);

        // Vamos a enviar los datos al servidor
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
            mail: email,
            password: password
        }).then((response) => {
            console.log("Response: ", response);
            setError(false);

            setMsg("Login correcto");

            // console.log("Token: ", response.data.access_token);
            const token = response.data.access_token;
            const userId = response.data.userId;
            const username = response.data.username;
            setToken(token);
            setUserId(userId);
            setUsername(username);
            // Redireccionar al usuario
            navigate(`/index`);
            

        }).catch((error) => {
            const msg = error.response.data.error;
            setMsg(msg);
            setError(true);
        }
        );
    };

    return (
        <div className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            {/* alertas de exito y error */}
            <form onSubmit={handleSubmit}>
            {!error && msg.length > 0 && <div className="successMsg"> {msg} </div>}
            {error && <div className="error">{msg}.</div>}
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;