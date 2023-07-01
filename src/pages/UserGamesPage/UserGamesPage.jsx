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
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      'method': 'get',
      'url': `${VITE_BACKEND_URL}/users/${userId}/games`,
      'headers': {
          'Authorization': `Bearer ${token}`
      }
    }
    console.log(token);
    axios(config)
      .then((response) => {
        const games = response.data.userGames;
        setUserGames(games);
      })
      .catch((error) => {
        console.log(error)
        let msg = error.response.data || error.message;
        if (error.response.status === 401) {
          msg = `${msg}: Debes iniciar sesión para ver tus juegos`;
        }
        setMsg(msg);
      });
  }, [userId, token]);

  return (
    <div>
      {!msg ? (
        <div className="user-games">
          <h2>Mis Juegos</h2>
          <div className="game-list">
            {userGames.map((game) => (
              <div key={game.id} className="game-card">
                <h3 className="game-title">Id del juego {game.id}</h3>
                <p className="game-description">Número de turno {game.turnNumber}</p>
                <Link to={`/users/${userId}/games/${game.id}`}>
                  <button className="play-button">Jugar</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="user-games">
          <h1>{msg}</h1>
        </div>
      )}
    </div>
  );
}

export default UserGamesPage;
