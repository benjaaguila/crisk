/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import { GameContext } from "../../pages/GamePage/GamePage";
import './StatusBar.css';

//  Rojo, Azul, Verde, Amarillo, Naranja, Morado, Celeste
const LISTADO_COLORES_HEX = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080', '#00FFFF']

export default function StatusBar() {
    const {gameStatus, setGameStatus} = useContext(GameContext);
    const {boardData, setBoardData} = useContext(GameContext);
    const relationUserPlayer = boardData.relationUserPlayer;

    // console.log('gameStatus');
    // console.log(gameStatus);
    // console.log(relationUserPlayer);
    // console.log(LISTADO_COLORES_HEX[0])
    
    // Buscamos el playerId en el objeto relationUserPlayer y obtenemos el userId
    let userId = null
    for (const key in relationUserPlayer) {
        // eslint-disable-next-line no-prototype-builtins
        if (relationUserPlayer.hasOwnProperty(key) && relationUserPlayer[key].playerId === gameStatus.currentTurn.playerId) {
            userId = relationUserPlayer[key].userId;
            relationUserPlayer[key]['current'] = true;
        } else {
            relationUserPlayer[key]['current'] = null;
        }
    }


    if (Object.keys(gameStatus)) {
        return (
            <div className="StatusBar">
                <svg version="1.1" id="StatusBar" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px"	 viewBox="0 0 120 605">
                    <g id="Box_Turn">
                        <rect id="Box" x="15" y="18.47" className="st6" width="90" height="70"/>
                        <rect x="19.07" y="26.83" className="st1" width="81.86" height="22.93"/>
                        <text id="Label" transform="matrix(1 0 0 1 19.0699 46.0041)" className="st2 st7">TURNO</text>
                        <rect x="45.5" y="57.83" className="st1" width="29.01" height="24.76"/>
                        <text id="Number" transform="matrix(1 0 0 1 45.497 76.998)" className="st2 st7">{gameStatus.currentTurn.turnNumber}</text>
                    </g>
                    <text id="Label_Players" transform="matrix(1 0 0 1 23.8795 119.5703)" className="st2 st5">JUGADORES</text>

                    <g id="Box_Player_1">
                        <rect id="Box" x="15.6" y="132.18" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[0], opacity: relationUserPlayer[0].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.5667 150.0983)" className="st2 st5">{gameStatus.playersInfo[0].id}</text>
                        <g id="Labels">
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.55 185.0499)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.55 175.0499)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.55 165.0499)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.5666 185.0318)" className="st2 st4">{gameStatus.playersInfo[0].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.5666 175.0318)" className="st2 st4">{gameStatus.playersInfo[0].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.5666 165.0318)" className="st2 st4">{gameStatus.playersInfo[0].territories}</text>
                        </g>
                    </g>
                    <g id="Box_Player_2">
                        <rect id="Box" x="15.5" y="193.96" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[1], opacity: relationUserPlayer[1].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.4674 211.8721)" className="st2 st5">{gameStatus.playersInfo[1].id}</text>
                        <g id="Labels">
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.4506 246.8238)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.4506 236.8238)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.4506 226.8238)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.4673 246.8057)" className="st2 st4">{gameStatus.playersInfo[1].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.4673 236.8057)" className="st2 st4">{gameStatus.playersInfo[1].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.4673 226.8057)" className="st2 st4">{gameStatus.playersInfo[1].territories}</text>
                        </g>
                    </g>
                    <g id="Box_Player_3">
                        <rect id="Box" x="15.3" y="255.73" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[2], opacity: relationUserPlayer[2].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.2686 273.6461)" className="st2 st5">{gameStatus.playersInfo[2].id}</text>
                        <g id="Labels">
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.2519 308.5977)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.2519 298.5977)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.2519 288.5977)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.2685 308.5796)" className="st2 st4">{gameStatus.playersInfo[2].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.2685 298.5796)" className="st2 st4">{gameStatus.playersInfo[2].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.2685 288.5796)" className="st2 st4">{gameStatus.playersInfo[2].territories}</text>
                        </g>
                        
                        
                    </g>
                    <g id="Box_Player_4">
                        <rect id="Box" x="15.2" y="317.51" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[3], opacity: relationUserPlayer[3].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.1693 335.4199)" className="st2 st5">{gameStatus.playersInfo[3].id}</text>
                        <g id="Labels">
                            <rect x="41.15" y="362.32" className="st1" width="60.05" height="9"/>
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.1525 370.3715)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.1525 360.3715)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.1525 350.3715)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.1692 370.3535)" className="st2 st4">{gameStatus.playersInfo[3].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.1692 360.3535)" className="st2 st4">{gameStatus.playersInfo[3].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.1692 350.3535)" className="st2 st4">{gameStatus.playersInfo[3].territories}</text>
                        </g>    
                    </g>
                    <g id="Box_Player_5">
                        <rect id="Box" x="15.6" y="379.28" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[4], opacity: relationUserPlayer[4].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.5667 397.1938)" className="st2 st5">{gameStatus.playersInfo[4].id}</text>
                        <g id="Labels">
                                <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.55 432.1454)" className="st2 st3">RECURSOS</text>
                                <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.55 422.1454)" className="st2 st3">TROPAS</text>
                                <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.55 412.1454)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.5666 432.1273)" className="st2 st4">{gameStatus.playersInfo[4].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.5666 422.1273)" className="st2 st4">{gameStatus.playersInfo[4].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.5666 412.1273)" className="st2 st4">{gameStatus.playersInfo[4].territories}</text>
                        </g>   
                    </g>
                    <g id="Box_Player_6">
                        <rect id="Box" x="15" y="441.05" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[5], opacity: relationUserPlayer[5].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 18.9706 458.9677)" className="st2 st5">{gameStatus.playersInfo[5].id}</text>
                        <g id="Labels">
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 40.9538 493.9193)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 40.9538 483.9193)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 40.9538 473.9193)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 18.9705 493.9012)" className="st2 st4">{gameStatus.playersInfo[5].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 18.9705 483.9012)" className="st2 st4">{gameStatus.playersInfo[5].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 18.9705 473.9012)" className="st2 st4">{gameStatus.playersInfo[5].territories}</text>
                        </g>
                    </g>
                    <g id="Box_Player_7">
                        <rect id="Box" x="15.6" y="502.83" className ='box_jugadores' style={{fill: LISTADO_COLORES_HEX[6], opacity: relationUserPlayer[6].current ? 1 : 0.2}}/>
                        <text id="Name" transform="matrix(1 0 0 1 19.5667 520.7416)" className="st2 st5">{gameStatus.playersInfo[6].id}</text>
                        <g id="Labels">
                            <text id="Label_Rec" transform="matrix(0.9724 0 0 1 41.5499 555.6932)" className="st2 st3">RECURSOS</text>
                            <text id="Label_Car" transform="matrix(0.9724 0 0 1 41.5499 545.6932)" className="st2 st3">TROPAS</text>
                            <text id="Label_Con" transform="matrix(0.9724 0 0 1 41.5499 535.6932)" className="st2 st3">CONQUISTAS</text>
                        </g>
                        <g id="Data">
                            <text id="N_Resource" transform="matrix(0.9724 0 0 1 19.5666 555.6751)" className="st2 st4">{gameStatus.playersInfo[6].resources}</text>
                            <text id="N_Car" transform="matrix(0.9724 0 0 1 19.5666 545.6751)" className="st2 st4">{gameStatus.playersInfo[6].troops}</text>
                            <text id="N_Conquistas" transform="matrix(0.9724 0 0 1 19.5666 535.6751)" className="st2 st4">{gameStatus.playersInfo[6].territories}</text>
                        </g>
                    </g>
                </svg>

            </div>
        )
        }
}
