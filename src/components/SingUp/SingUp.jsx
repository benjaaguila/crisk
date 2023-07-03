import React, { useState, useContext } from "react";


import './SingUp.css'
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import VITE_BACKEND_URL from "../../config";

function SingUp() {
    const { token, setToken } = useContext(AuthContext);
    const {setUsername} = useContext(AuthContext);
    const { userId, setUserId } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [msg, setMsg] = useState("");
    // const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Vamos a enviar los datos al servidor
        axios.post(`${VITE_BACKEND_URL}/auth/singup`, {
            mail: email,
            username: inputUsername,
            password: password
        }).then((response) => {
            console.log("Response: ", response);
            setMsg("Se ha registrado correctamente");

            // Inmediatamente despues de registrarse, se loguea
            axios.post(`${VITE_BACKEND_URL}/auth/login`, {
                mail: email,
                password: password
            }).then((response) => {
                console.log("Response Login afterSingUp: ", response);
                console.log("Token: ", response.data.access_token);
                const token = response.data.access_token;
                const userId = response.data.userId;
                const username = response.data.username;
                setToken(token);
                setUserId(userId);
                setUsername(username);


                // Redireccionamos a la pagina de inicio
                window.location.href = "/index";

                

            }).catch((error) => {
                console.log("Error Login afterSingUp: ", error);
            }
            );

        }).catch((error) => {
            console.log(error.response.data);
            let msj;
            if (error.response.data.error) {
                msj = error.response.data.error;
            }
            else if (error.response.data.errors.length > 0 ) {
                msj = error.response.data.errors[0].message;
            }
            console.log(msj);
            setMsg(msj);
        }
        );
    };

    return (
        <div className="SingUp">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            
            <form onSubmit={handleSubmit}>
                <h1>SingUp</h1>
                {msg && <h2 className="errormsj">{msg}</h2>}
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
                <div className="username">
                    <label htmlFor="name">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={inputUsername}
                        onChange={(event) => setInputUsername(event.target.value)}
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
                    SingUp
                </button>
            </form>
        </div>
    );
}

export default SingUp;