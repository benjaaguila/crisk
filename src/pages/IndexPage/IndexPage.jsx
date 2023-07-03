import React from "react";
import './index.css';
import viteLogo from '../../../public/assets/crisk_logo.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/auth/AuthContext";
import { useContext } from "react";


function IndexPage() {
    const { username } = useContext(AuthContext);
    const { userId } = useContext(AuthContext);
    return (
      <div className="content">
          {/* le dmos la bienvenida a {username} si es que existe */}
          <div className="welcome">
              <h1 className="title">Bienvenido {username ? username : "a Catan Risk"}</h1>
            </div>
          <div className="cascade">
            <div className="icono">
              <img src={viteLogo} className="logo" id="landing-logo" />
            </div>

            <div className="resumen">
              <p>
                Luego del fallecimiento de Klaus Teuber el pasado 1 de abril, la editorial alemana Kosmos ha anunciado que el juego de mesa más vendido de la historia, Settlers of Catan, tendrá una nueva expansión. 
                Es por eso que, lo hemos traido del más alla para que puedas ver esta versión remasterizada de este gran juego. Una mezcla entre el clasico Catán y el emocionante juego Risk. 
                Ahora podrás presenciar como destruyes tu amistad por un juego de mesa, en donde deberas construir tu imperio y conquistar el mundo.
              </p>
            </div>
            
            <div className="button-start">
              <Link to={`/users/${userId}/games`}>
                <button className="button">
                  <span className="actual-text">&nbsp;Jugar&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">&nbsp;Jugar&nbsp;</span>
                </button>
              </Link>
            </div>

            <div className="button-options">
              <button className="button">
                <span className="actual-text">&nbsp;Opciones&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;Opciones&nbsp;</span>
              </button>
            </div>

            <div className="button-stats">
              <button className="button">
                <span className="actual-text">&nbsp;Estadisticas&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;Estadisticas&nbsp;</span>
              </button>
            </div>


            <div className="button-credits">
            <ul className="wrapper">
              <li className="icon info">
                  <span className="tooltip">Info</span>
                  <span><i className="fab fa-info"></i></span>
              </li>
              <li className="icon set">
                  <span className="tooltip">Configuracion</span>
                  <span><i className="fab fa-set"></i></span>
              </li>
              <li className="icon score">
                  <span className="tooltip">Puntaje</span>
                  <span><i className="fab fa-score"></i></span>
              </li>
          </ul>
            </div>

            {/* <div className="buttons">
              <div className="info">
                  <span className="extra-info"></span>
              </div>
              <div className="loader"></div>
              


            </div> */}
          </div>
      </div>
    )
  }
  
  export default IndexPage;