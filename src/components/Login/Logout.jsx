import React, {useContext, useState} from 'react';
import { AuthContext } from '../auth/AuthContext';
import './Login.css';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const handleLougout = () => {
        logout();
        setMsg("Logout correcto");
    }

    return (
        <div className="logout">
            <h1>Logout</h1>
            <button onClick={handleLougout}>Logout</button>
            <p>{msg}</p>
        </div>
    )
}

export default LogoutButton;