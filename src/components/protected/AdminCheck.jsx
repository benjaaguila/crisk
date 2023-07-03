import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import VITE_BACKEND_URL from "../../config";


function AdminCheck() {
    const { token } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    console.log("Tokennnn: ", token);

    const config = {
        'method': 'get',
        'url': `${VITE_BACKEND_URL}/scopeExample/protectedadmin`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios(config).then((response) => {
            console.log('Token correcto // admin');
            console.log(response);
            setMsg(response.data.message);
        }).catch((error) => {
            console.log('Token incorrecto // no eres admin');
            console.log(error);
            setMsg(error.message);

        })
    }, []) 

    return (
        <div>
            <h1>Protected User</h1>
            <p>{msg}</p>
        </div>
    )
}

export default AdminCheck;
