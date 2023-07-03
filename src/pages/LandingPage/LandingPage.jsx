import React from "react";
import { Link } from "react-router-dom";
import './landing.css';
import Phrase from "./Phrase";
import viteLogo from '../../../public/assets/crisk_logo.png'

function LandingPage() {
  return (
    <>
        <div className="content">
            <img src={viteLogo} className="logo" id="landing-logo" />
            <Phrase/>
            <div className="row-content">
            <Link className="play-button" to="/rules" id="unknown-user-button">
                Cómo Jugar
            </Link>
            <Link className="play-button" to="/login" id="known-user-button">
                Ya tengo una cuenta
            </Link>
            <Link className="play-button" to="/singup" id="known-user-button">
                Registrarse
            </Link>
            </div>
        </div>
    </>
  )
}

export default LandingPage;