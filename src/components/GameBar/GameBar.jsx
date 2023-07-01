import React, {useContext, useState} from "react";
import { GameContext } from "../../pages/GamePage/GamePage";
import { useParams } from 'react-router-dom';
import './GameBar.css';
import axios from "axios";
// import Cube from "../Slide/Cube";
import Dice from "../Dice/Dice";

export default function GameBar() {
    const {playerData, setplayerData} = useContext(GameContext);
    const {showForm, setShowForm} = useContext(GameContext);
    const {showTerritoryModal, setShowTerritoryModal} = useContext(GameContext);
    const {gameData, setGameData} = useContext(GameContext);
    const {gameStatus, setGameStatus} = useContext(GameContext);
    const {showEndTurnModal, setShowEndTurnModal} = useContext(GameContext);
    const {diceValue, setDiceValue} = useContext(GameContext);
    const { userId } = useParams();
    const { gameId } = useParams();
    // Si el userId no es el mismo que
    // gameData.currentPlayer.userId se deshabilitan los botones
    // console.log('hidebuttons');
    // console.log(parseInt(userId));
    // console.log(parseInt(gameData.currentPlayer.userId));
    if (parseInt(gameData.currentPlayer.userId) !== parseInt(userId) && showTerritoryModal === false && showForm === false && showEndTurnModal === false) {
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            button.classList.add('disable');
        }
        );
        
    } else if (parseInt(gameData.currentPlayer.userId) === parseInt(userId) && showTerritoryModal === false && showForm === false && showEndTurnModal === false){
        // se remueve la calse disable solo si la tenia
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            button.classList.remove('disable');
        }
        );
    }

    // Si el currentTurn ya esta asignado, se deshabilita el boton de lanzar dados
    if (gameStatus.currentTurn.diceNumber !== null) {
        setDiceValue(gameStatus.currentTurn.diceNumber);
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            if (button.id === 'throwDice-button') {
                button.classList.add('disable');
            }
        }
        );
    }
    const handleTransaction = () => {
        setShowTerritoryModal(true);
        // agregamos la clase disable a todos los botones
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            button.classList.add('disable');
        }
        );
    }
    const handleEndTurn = () => {
        setShowEndTurnModal(true);
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            button.classList.add('disable');
        }
        );
    }
    const handleThrowDice = () => {
        // Agregamos la clase disable solo al boton con id throwDice-button
        const buttons = document.querySelectorAll('#buttons > g');
        buttons.forEach(button => {
            if (button.id === 'throwDice-button') {
                button.classList.add('disable');
            }
        }
        );
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${gameId}/throwDice`)
        .then((response) => {
            setDiceValue(response.data);
        }
        )
        .catch((error) => {
            console.log(error);
        }
        );
    }
    // Si playerData esta vacio no renderiza nada
    if (playerData) {
        return (
            <>
            <div className="GameBar">
                <svg version="1.1" id="GameBar" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 900 120">
                    <g id="Section_1">
                        <text id="Name" transform="matrix(1 0 0 1 132.8241 24.5993)" className="st6_GB st7_GB">TROPAS</text>

                        <g id="Troops_1">
                            <rect id="Box_1" x="12" y="28" className="st0_GB" width="80" height="80"/>
                            <text id="Number_1" transform="matrix(1 0 0 1 43.797 95.948)" className="st1_GB st3_GB">{playerData.cavalryCount}</text>
                            <text id="Name_1" transform="matrix(1 0 0 1 14.5674 71.8283)" className="st1_GB st3_GB">CABALLERÍA</text>
                        </g>
                        <g id="Troops_2">
                            <rect id="Box_2" x="126" y="28" className="st4_GB" width="80" height="80"/>
                            <text id="Number_2" transform="matrix(1 0 0 1 157.797 95.948)" className="st1_GB st3_GB">{playerData.infantryCount}</text>
                            <text id="Name_2" transform="matrix(1 0 0 1 128.5674 71.8283)" className="st1_GB st3_GB">INFANTERÍA</text>
                        </g>
                        <g id="Troops_3">
                            <rect id="Box_3" x="239" y="28" className="st5_GB" width="80" height="80"/>
                            <text id="Number_3" transform="matrix(1 0 0 1 270.797 95.948)" className="st1_GB st3_GB">{playerData.artilleryCount}</text>
                            <text id="Name_3" transform="matrix(1 0 0 1 243.5674 71.8283)" className="st1_GB st3_GB">ARTILLERÍA</text>
                        </g>
                        
                    </g>
                    <g id="Section_2">
                        <text id="Name" transform="matrix(1 0 0 1 477.0798 24.5995)" className="st6_GB st7_GB">RECURSOS</text>

                        <g id="Resource_1">    
                                <rect id="Box_1" x="368.13" y="28" className="st8_GB" width="80" height="80"/>
                                <text id="Number_1" transform="matrix(1 0 0 1 399.9263 95.9482)" className="st1_GB st3_GB">{playerData.cooperCount}</text>
                                <text id="Name_1" transform="matrix(1 0 0 1 387.9286 71.8285)" className="st1_GB st3_GB">COBRE</text>
                        </g>
                        <g id="Resource_2">
                                <rect id="Box_2" x="482.13" y="28" className="st9_GB" width="80" height="80"/>
                                <text id="Number_2" transform="matrix(1 0 0 1 513.9263 95.9482)" className="st1_GB st3_GB">{playerData.silverCount}</text>
                                <text id="Name_2" transform="matrix(1 0 0 1 502.4594 71.8285)" className="st1_GB st3_GB">PLATA</text>
                        </g>
                        <g id="Resource_3">
                                <rect id="Box_3" x="595.13" y="28" className="st10_GB" width="80" height="80"/>
                                <text id="Number_3" transform="matrix(1 0 0 1 626.9263 95.9482)" className="st1_GB st3_GB">{playerData.goldCount}</text>
                                <text id="Name_3" transform="matrix(1 0 0 1 621.3774 71.8285)" className="st1_GB st3_GB">ORO</text>
                        </g>
                        
                            
                    </g>
                    <g id="buttons">
                        <g id="end-turn-button" onClick={handleEndTurn}>
                            <rect id="Button_Action" x="807.32" y="63.06" className="st11_GB" width="80" height="50"/>
                            <text id="Name_Action" transform="matrix(1 0 0 1 820.0934 92.0559)" className="st1_GB st3_GB">Turn End</text>
                        </g>
                        <g id="transaction-button" onClick={handleTransaction}>
                            <rect id="Button_Action" x="807.32" y="6.83" className="st12_GB" width="80" height="50"/>
                            <text id="Name_Action" transform="matrix(1 0 0 1 822.8615 36.0046)" className="st1_GB st3_GB">COMPRAR</text>
                        </g>
                        <g id="throwDice-button" onClick={handleThrowDice}>
                            <rect id="Button_Action" x="715.52" y="63.17" className="st13_GB" width="80" height="50"/>
                            <text id="Name_Action" transform="matrix(1 0 0 1 730.5848 86.1683)"><tspan x="0" y="0" className="st1_GB st3_GB">LANZAR</tspan><tspan x="3.53" y="14.4" className="st1_GB st3_GB">DADOS</tspan></text>
                        </g>
                        <g id="attack-button">
                            <rect id="Button_Action" x="715.52" y="6.94" className="st14_GB" width="80" height="50"/>
                            <text id="Name_Action" transform="matrix(1 0 0 1 731.0589 36.1169)" className="st1_GB st3_GB">ATACAR</text>
                        </g>
                    </g>
                </svg>
                <Dice/>
            </div>
            {/* {hidebuttons()} */}
            </>
        )
        }
}