import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
    const [username, setUsername] = useState(localStorage.getItem("username") || null);

    useEffect(() => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
    }, [token])

    function logout() {
        setToken(null);
        setUserId(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId, username, setUsername, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;