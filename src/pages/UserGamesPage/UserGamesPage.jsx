import React, { useEffect, useState } from "react";
import './UserGamesPage.css';
import { AuthContext } from "../../components/auth/AuthContext";
import { Link, useParams } from 'react-router-dom';
import { useContext } from "react";
import axios from "axios";
import VITE_BACKEND_URL from "../../config";

function UserGamesPage() {
  const { userId } = useParams();
  const { username } = useContext(AuthContext);
  const [userGames, setUserGames] = useState([]);
  const [msg, setMsg] = useState(null);
  const [num, setNum] = useState(0);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      'method': 'get',
      'url': `${VITE_BACKEND_URL}/users/${userId}/games`,
      'headers': {
          'Authorization': `Bearer ${token}`
      }
    }
    let num = 0
    axios(config)
      .then((response) => {
        const games = response.data.userGames;
        console.log(response)
        setNum(response.status)
        setUserGames(games);
      })
      .catch((error) => {
        let msg = error.response.data || error.message;
        num = error.response.status || 400;

        if (error.response.status === 401) {
          msg = `Debes iniciar sesión para ver tus juegos`;
        } else if (error.response.status === 404) {
          msg = `No tienes juegos`;
        }
        setNum(num)
        setMsg(msg);
      });
  }, [userId, token]);

  const handleCreateGame = async (event) => {
    event.preventDefault();
    const config = {
      'method': 'post',
      'url': `${VITE_BACKEND_URL}/users/${userId}/games/create`,
      'headers': {
          'Authorization': `Bearer ${token}`
      }
    }
    axios(config)
      .then((response) => {
        console.log(response)
        const game = response.data.game;
        console.log(game)
        const gameId = game.id;
        window.location.href = `/games/${gameId}`;
      })
      .catch((error) => {
        console.log(error);
        let msg = error.response.data || error.message;
        let num = error.response.status || 400;
        setMsg(msg);
        setNum(num);
      });
  };


  console.log(num, msg)

  if (num === 401) {
    // No ha iniciado sesión
    return (
      <div className="user-games">
        <h1>{msg}</h1>
        <Link to="/login">
          <button className="back-button">Iniciar Sesión</button>
        </Link>
      </div>
    );
  } else if (num === 404) {
    // No tiene juegos
    return (
      <div className="user-games">
        <h1>{msg}</h1>
        <button className="back-button" onClick={handleCreateGame}>
          Crear Juego
        </button>
        <Link to={`/index`}>
          <button className="back-button">Volver</button>
        </Link>
      </div>
    );
  } else if (num === 200 || num === 201) {
    return (
      <div className="user-games">
        <h2>Mis Juegos</h2>
        <div className="game-list">
        {userGames.map((game) => (
          <div key={game.id} className="game-card">
            <h3 className="game-title">Id del juego {game.id}</h3>
            {game.turnNumber === 1 ? (
              <p className="waiting-message">Esperando jugadores...</p>
            ) : (
              <>
                <p className="game-description">Número de turno {game.turnNumber}</p>
                <Link to={`/users/${userId}/games/${game.id}`}>
                  <button className="play-button">Jugar</button>
                </Link>
              </>
          )}
    </div>
  ))}
</div>
      </div>
    );
  } else if (num !== 0) {
    return (
      <div className="user-games">
        <h1>{msg}</h1>
        <Link to={`/index`}>
          <button className="back-button">Volver</button>
        </Link>
      </div>
    );
  }
}

export default UserGamesPage;
