import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function Navbar() {
    const { token, setToken } = useContext(AuthContext);
    return (
        <header>
            <div id="logo-container">
                    <NavLink to="/" className="logo-display">
                        <img src="/public/assets/crisk_logo.png" alt="logo-image" className="logo-image" />
                    </NavLink>
            </div>
            <nav className="navbar">
                <ul className="navbar-links-container">
                    <li className="navbar-element">
                        <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Inicio
                        </NavLink>
                    </li>
                    
                    <li className="navbar-element"> 
                        <NavLink to="index" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Ir al juego
                        </NavLink>
                    </li>
        
                    <li className="navbar-element">
                        <NavLink to="rules" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Reglas
                        </NavLink>    
                    </li>
                    <li className="navbar-element"> 
                        <NavLink to="about" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Nosotros
                        </NavLink>
                    </li>
                    {/* Solo se despliega si no hay un token */}
                    {!token && (
                        <li className="navbar-element"> 
                        <NavLink to="singup" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Registrarse
                        </NavLink>
                    </li>
                    )}
                    {/* Solo se despliega si no hay un token */}
                    {!token && (
                        <li className="navbar-element"> 
                            <NavLink to="login" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                                Ingresar
                            </NavLink>
                        </li>
                    )}
                    {/* Se despliega solo si hay token */}
                    {token && (
                        <li className="navbar-element"> 
                        <NavLink to="logout" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Cerrar sesión
                        </NavLink>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;