import {React, ReactDOM} from 'react';
import './GamePage.css';
import { useEffect } from 'react';
import axios from 'axios';

import Map from '../../components/Map/Map';
import GameBar from '../../components/GameBar/GameBar';
import StatusBar from '../../components/StatusBar/StatusBar';

import Cavalry from '../../components/Icons/Cavalry';
import Artillery from '../../components/Icons/Artillery';
import Infantry from '../../components/Icons/Infantry';

import { useParams } from 'react-router-dom';
import { useState, createContext } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/auth/AuthContext';
import VITE_BACKEND_URL from "../config";

const UBICACIONES_NUM_TABLERO = {
  '1': {
    'x': 500,
    'y': 697.94,
    'min_y': 440,
    'max_y': 580,
    'min_x': 250,
    'max_x': 300
  },
  '2': {
    'x': 269.71,
    'y': 654.94,
    'min_y': 440,
    'max_y': 590,
    'min_x': 320,
    'max_x': 360,
  },
  '3': {
    'x': 173.71,
    'y': 522.94,
    'min_x': 250,
    'max_x': 320,
    'min_y': 370,
    'max_y': 400,
  },
  '4': {
    'x': 297.71,
    'y': 538.94,
    'min_x': 320,
    'max_x': 420,
    'min_y': 340,
    'max_y': 450,
  },
  '5': {
    'x': 177.71,
    'y': 441.94,
    'min_x': 200,
    'max_x': 340,
    'min_y': 300,
    'max_y': 350,
  },
  '6': {
    'x': 151.71,
    'y': 322.94,
    'min_x': 210,
    'max_x': 300,
    'min_y': 185,
    'max_y': 300,
  },
  '7': {
    'x': 151.71,
    'y': 322.94,
    'min_x': 160,
    'max_x': 410,
    'min_y': 120,
    'max_y': 180,
  },
  '8': {
    'x': 71.71,
    'y': 100.94,
    'min_x': 160,
    'max_x': 240,
    'min_y': 50,
    'max_y': 120,
  },
  '9': {
    'x': 217.71,
    'y': 107.94,
    'min_x': 240,
    'max_x': 410,
    'min_y': 50,
    'max_y': 120,
  },
  '10': {
    'x': 493.71,
    'y': 78.94,
    'min_x': 460,
    'max_x': 530,
    'min_y': 25,
    'max_y': 120,
  },
  '11': {
    'x': 644.71,
    'y': 153.94,
    'min_x': 570,
    'max_x': 640,
    'min_y': 100,
    'max_y': 160,
  },
  '12': {
    'x': 656.71,
    'y': 320.94,
    'min_x': 570,
    'max_x': 660,
    'min_y': 200,
    'max_y': 270,
  },
  '13': {
    'x': 821.71,
    'y': 344.94,
    'min_x': 680,
    'max_x': 760,
    'min_y': 220,
    'max_y': 300,
  },
  '14': {
    'x': 821.71,
    'y': 218.94,
    'min_x': 675,
    'max_x': 760,
    'min_y': 120,
    'max_y': 210,
  },
  '15': {
    'x': 958.71,
    'y': 365.94,
    'min_x': 780,
    'max_x': 870,
    'min_y': 220,
    'max_y': 310,
  },
  '16': {
    'x': 957.71,
    'y': 227.94,
    'min_x': 780,
    'max_x': 870,
    'min_y': 120,
    'max_y': 210,
  },
  '17': {
    'x': 1090.71,
    'y': 227.94,
    'min_x': 880,
    'max_x': 960,
    'min_y': 110,
    'max_y': 230,
  },
  '18': {
    'x': 552.71,
    'y': 578.94,
    'min_x': 490,
    'max_x': 570,
    'min_y': 370,
    'max_y': 450,
  },
  '19': {
    'x': 665.71,
    'y': 507.94,
    'min_x': 540,
    'max_x': 690,
    'min_y': 320,
    'max_y': 400,
  },
  '20': {
    'x': 666.71,
    'y': 607.94,
    'min_x': 560,
    'max_x': 690,
    'min_y': 410,
    'max_y': 510,
  },
  '21': {
    'x': 790.71,
    'y': 697.94,
    'min_x': 640,
    'max_x': 780,
    'min_y': 500,
    'max_y': 540,
  },
  '22': {
    'x': 793.71,
    'y': 790.94,
    'min_x': 640,
    'max_x': 780,
    'min_y': 550,
    'max_y': 610,
  },
  '23': {
    'x': 842.71,
    'y': 561.94,
    'min_x': 700,
    'max_x': 790,
    'min_y': 330,
    'max_y': 470,
  },
  '24': {
    'x': 1035.71,
    'y': 557.94,
    'min_x': 840,
    'max_x': 910,
    'min_y': 350,
    'max_y': 470,
  },
  '25': {
    'x': 1171.71,
    'y': 709.94,
    'min_x': 900,
    'max_x': 1030,
    'min_y': 460,
    'max_y': 610,
  }
};

//  Rojo, Azul, Verde, Amarillo, Naranja, Morado, Celeste
const LISTADO_COLORES_HEX = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080', '#00FFFF']



export const GameContext = createContext();

export default function GamePage() {
    const [mapLoaded, setMapLoaded] = useState(false);
    const { gameId } = useParams();
    const { userId } = useParams();
    const [boardData, setBoardData] = useState({});
    const [playerData, setplayerData] = useState({});
    const [gameStatus, setGameStatus] = useState({});
    const [gameData, setGameData] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [cavalryRequested, setcavalryRequested] = useState(0);
    const [infantryRequested, setinfantryRequested] = useState(0);
    const [artilleryRequested, setartilleryRequested] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [summaryData, setSummaryData] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState({});
    const [showTerritoryModal, setShowTerritoryModal] = useState(false);
    const [selectedTerritory, setSelectedTerritory] = useState(null);
    const [endTurn, setEndTurn] = useState(false);
    const [showEndTurnModal, setShowEndTurnModal] = useState(false);
    const [transaction, setTransaction] = useState(false);
    const [diceValue, setDiceValue] = useState(0);
    const { token } = useContext(AuthContext);
    // dictTerritories es un diccionario que contiene los id de los territorios
    // y como valor un booleano que indica si el territorio esta seleccionado o no
    const [dictTerritories, setDictTerritories] = useState(() => {
      const initialDict = {};
      for (let i = 1; i <= 25; i++) {
        initialDict[`T${i}`] = false;
      }
      return initialDict;
    });
    // Creamos el useEffect para que se ejecute cuando se cargue el componente
    useEffect(() => {
      const config = {
        'method': 'get',
        'url': `${VITE_BACKEND_URL}/games/${gameId}/boardData`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
      }
      axios(config)
      .then((response) => {
          const boardData = response.data;
          setBoardData(boardData);
      }).catch((error) => {
          console.log(error);
      });
    }, [showForm, endTurn, gameId, token]);

    // Creamos un usseEffect para que consulte la ruta de playerData
    useEffect(() => {
        const config = {
          'method': 'get',
          'url': `${VITE_BACKEND_URL}/users/${userId}/games/${gameId}/playerData`,
          'headers': {
              'Authorization': `Bearer ${token}`
          }
        }
        axios(config)
        .then((response) => {
            const playerData = response.data;
            setplayerData(playerData);
        }).catch((error) => {
            console.log(error);
        });
    }, [showForm, endTurn, gameId, userId, token]);

    // Creamos un useEffect para que consulte la ruta de gameStatus
    useEffect(() => {
        const config = {
        'method': 'get',
        'url': `${VITE_BACKEND_URL}/games/${gameId}/status`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
      }
        axios(config)
        .then((response) => {
            const gameStatus = response.data;
            setGameStatus(gameStatus);
            setMapLoaded(true);
        }).catch((error) => {
            console.log(error);
        });
    }, [endTurn, gameId, token]);

    // Creamos un useEffect para que consulte la ruta de games/{gameId}
    useEffect(() => {
      const config = {
        'method': 'get',
        'url': `${VITE_BACKEND_URL}/games/${gameId}`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
      }
      axios(config)
      .then((response) => {
        console.log('useEffect de gameData');
          const gameData = response.data;
          setGameData(gameData);
      }).catch((error) => {
          console.log(error);
      });
  }, [endTurn, gameId, token]);

    


    // Creamos un useEffect para que consulte la ruta de currentPlayer
    useEffect(() => {
        axios.get(`${VITE_BACKEND_URL}/games/${gameId}`)
        .then((response) => {
            const currentPlayer = response.data;
            setCurrentPlayer(currentPlayer.currentPlayer);
        }).catch((error) => {
            console.log(error);
        });
    }, [gameId]);


    // Función que cierra las ventans emergentes
    // y setea territoryselected a null
    const closeModal = () => {
      setShowSummary(false);
      setShowForm(false);
      setShowTerritoryModal(false);
      setSelectedTerritory(null);
      setShowEndTurnModal(false);
      // Reiniciamos el diccionario de territorios
      const initialDict = {};
      for (let i = 1; i <= 25; i++) {
        initialDict[`T${i}`] = false;
      }
      setDictTerritories(initialDict);
      // quitamos la clase disable a todos los botones
      const buttons = document.querySelectorAll('#buttons > g');
      buttons.forEach(button => {
        button.classList.remove('disable');
      }
      );
    };

    // Lógica que maneja el submit del formulario de transacciones
    // y hace el post al backend
    const handleTransactionSubmit = (e) => {
        e.preventDefault();
        axios.post(`${VITE_BACKEND_URL}/games/${gameId}/transaction`, {
            infantryRequired: infantryRequested,
            cavalryRequired: cavalryRequested,
            artilleryRequired: artilleryRequested,
            territoryNumber: selectedTerritory,
        }).then((response) => {
            const responseData = response.data;
            const infantryGain = responseData.infantryGain;
            const cavalryGain = responseData.cavalryGain;
            const artilleryGain = responseData.artilleryGain;
            const cooperPaid = responseData.cooperPaid;
            const silverPaid = responseData.silverPaid;
            const goldPaid = responseData.goldPaid;
            const territoryNumber = responseData.territoryNumber;
            setShowSummary(true);
            setSummaryData({
                infantryGain,
                cavalryGain,
                artilleryGain,
                cooperPaid,
                silverPaid,
                goldPaid,
                territoryNumber,
            });
            setShowForm(false);

        }
        ).catch((error) => {
            // mostramos el error como un pop up
            console.log(error);
            const message = error.response.data;
            alert(message);
            setShowForm(false);
            closeModal();
        }
        );
    }
    
    // Creamos los componentes de Artillery en un bucle for
    const artilleryComponents = [];
    const infantryComponents = [];
    const cavalryComponents = [];
    // Posicionamos las tropas en el mapa    
    if(Object.keys(boardData).length !== 0){

      const relationUserPlayer = boardData.relationUserPlayer;

      // Recorremos el array de tropas
      var tropas = boardData.troops.length;
      [...Array(tropas)].map((_, i) => {
        
        const tropa = boardData.troops[i];
        let territoryNumber = tropa.territoryNumber;
        let playerId = tropa.playerId;

        // Buscamos el playerId en el objeto relationUserPlayer y obtenemos el userId
        let userId = null
        let llave = 0
        for (const key in relationUserPlayer) {
          // eslint-disable-next-line no-prototype-builtins
          if (relationUserPlayer.hasOwnProperty(key) && relationUserPlayer[key].playerId === playerId) {
            userId = relationUserPlayer[key].userId;
            llave = key;
            break;
          }
        }

        
        switch (tropa.type) {
          case 'infantry':
            infantryComponents.push(
              <Infantry
              hexcolor={LISTADO_COLORES_HEX[llave]}
              territoryNumbrer={territoryNumber}
              playerId={tropa.playerId}
              userId={userId}
              x={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_x'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_x'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_x']}  
              y={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_y'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_y'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_y']}
              />
            )
            break;
          case 'cavalry':
            cavalryComponents.push(
              <Cavalry
              hexcolor={LISTADO_COLORES_HEX[llave]}
              territoryNumbrer={tropa.territoryNumber}
              playerId={tropa.playerId}
              userId={userId}
              x={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_x'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_x'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_x']}  
              y={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_y'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_y'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_y']}
              />
            )
            break;
          case 'artillery':
            artilleryComponents.push(
              <Artillery
              hexcolor={LISTADO_COLORES_HEX[llave]}
              territoryNumbrer={tropa.territoryNumber}
              playerId={tropa.playerId}
              userId={userId}
              x={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_x'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_x'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_x']}  
              y={Math.floor(Math.random() * (UBICACIONES_NUM_TABLERO[territoryNumber]['max_y'] - UBICACIONES_NUM_TABLERO[territoryNumber]['min_y'])) + UBICACIONES_NUM_TABLERO[territoryNumber]['min_y']}
              />
            )
         }
      })
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      
      // Eliminar los ceros a la izquierda si el valor es un número entero
      if (Number.isInteger(Number(value))) {
        const sanitizedValue = String(Number(value));
        // Actualizar el estado con el valor sin ceros a la izquierda
        switch (name) {
          case 'cavalryCount':
            setcavalryRequested(sanitizedValue);
            break;
          case 'infantryCount':
            setinfantryRequested(sanitizedValue);
            break;
          case 'artilleryCount':
            setartilleryRequested(sanitizedValue);
            break;
          default:
            break;
        }
      } else {
        // Mantener el valor sin modificar si no es un número entero
        switch (name) {
          case 'cavalryCount':
            setcavalryRequested(value);
            break;
          case 'infantryCount':
            setinfantryRequested(value);
            break;
          case 'artilleryCount':
            setartilleryRequested(value);
            break;
          default:
            break;
        }
      }
};
  const handleTerritorySubmit = () => {
    setShowTerritoryModal(false);
    setShowForm(true);
  }

  const handleTerritoryEnd = () => {
    axios.get(`${VITE_BACKEND_URL}/games/${gameId}/endTurn`)
    .then((response) => {
        const responseData = response.data;
        setShowSummary(true);
        setSummaryData(responseData);
        setShowEndTurnModal(false);
        setEndTurn(true);
    }
    )
    .catch((error) => {
        console.log(error);
    }
    );
}

  return (
    <>
    <GameContext.Provider value={{
        boardData, setBoardData, 
        mapLoaded, setMapLoaded, 
        playerData, setplayerData,
        gameStatus, setGameStatus,
        gameData, setGameData,
        showForm, setShowForm,
        cavalryRequested, setcavalryRequested,
        infantryRequested, setinfantryRequested,
        artilleryRequested, setartilleryRequested,
        currentPlayer, setCurrentPlayer,
        selectedTerritory, setSelectedTerritory,
        showTerritoryModal, setShowTerritoryModal,
        dictTerritories, setDictTerritories,
        showEndTurnModal, setShowEndTurnModal,
        diceValue, setDiceValue,
        }}>

        <div className='map-content'>
            <h2>Game Page del jugador: {playerData.user ? playerData.user.username: ''}</h2>
            <h1>Jugador Actual: {gameData.currentUser ? gameData.currentUser.username: ''}</h1>
            <div className="board">
                {mapLoaded && <Map />}
                {mapLoaded && <GameBar />}
            </div>
        </div>
        <div className="status-bar">
            {mapLoaded && <StatusBar />}
        </div>
        <div className="icons" id='icons'>
            {mapLoaded && cavalryComponents}
            {mapLoaded && infantryComponents}
            {mapLoaded && artilleryComponents}
        </div>
        {mapLoaded && showForm && (
            <div className="modal">
                <form className="modal-form" onSubmit={handleTransactionSubmit}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className='transaction-inputs'>
                        <label htmlFor="cavalryCount">Cantidad de caballería</label>
                        <input type="number" id="cavalryCount" name="cavalryCount" value={cavalryRequested} onChange={handleInputChange} />
                        <label htmlFor="infantryCount">Cantidad de infantería</label>
                        <input type="number" id="infantryCount" name="infantryCount" value={infantryRequested} onChange={handleInputChange} />
                        <label htmlFor="artilleryCount">Cantidad de artillería</label>
                        <input type="number" id="artilleryCount" name="artilleryCount" value={artilleryRequested} onChange={handleInputChange} />
                        <input type="submit" value="Comprar" />
                    </div>
                </form>
            </div>
            )}
        {showSummary && (
        <div className="modal-transaction">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {summaryData.territoryNumber && (
              <>
                <h2>Resumen de la transacción</h2>
                <p>Ingresos de infantería: {summaryData.infantryGain}</p>
                <p>Ingresos de caballería: {summaryData.cavalryGain}</p>
                <p>Ingresos de artillería: {summaryData.artilleryGain}</p>
                <p>Cobre pagado: {summaryData.cooperPaid}</p>
                <p>Plata pagada: {summaryData.silverPaid}</p>
                <p>Oro pagado: {summaryData.goldPaid}</p>
                <p>Territorio seleccionado: {summaryData.territoryNumber}</p>
              </>
            )}
            {summaryData.nextUser && (
              <>
                <h2>Resumen del fin de turno</h2>
                <p>El siguiente jugador es: {summaryData.nextUser.username}</p>
              </>
            )}
          </div>
        </div>
      )}
      <div>
      {/* Ventana emergente para seleccion de territorio */}
      {showTerritoryModal && (
        <div className="modal-territory">
          {/* Contenido de la ventana emergente */}
          <h2>Selecciona un territorio para comprar tropas</h2>
            {/* Botones de confirmar y cancelar */}
            <div className="modal-buttons">
              <button className={selectedTerritory ? '' : 'disabled'} disabled={!selectedTerritory} onClick={handleTerritorySubmit}>Confirmar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
        </div>
      )}
      {/* Ventana emergente para confirmar endTurn */}
      {showEndTurnModal && (
        <div className="modal-territory">
          {/* Contenido de la ventana emergente */}
          <h2>Estas seguro de que quieres terminar el turno?</h2>
            {/* Botones de confirmar y cancelar */}
            <div className="modal-buttons">
              <button onClick={handleTerritoryEnd}>Confirmar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
        </div>
      )}
      
      </div>
    </GameContext.Provider>
    </>
  );
}