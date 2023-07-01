/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useRef, useContext } from 'react';
import './map.css';
import { GameContext } from '../../pages/GamePage/GamePage';

function Map() {
  
  const { boardData, setBoardData } = useContext(GameContext);

  const { currentPlayer, setCurrentPlayer } = useContext(GameContext);
  const {selectedTerritory, setSelectedTerritory} = useContext(GameContext);
  const {showTerritoryModal, setShowTerritoryModal} = useContext(GameContext);
  const {dictTerritories, setDictTerritories} = useContext(GameContext);

  useEffect(() => {
    // Actualizar el mapa después de cambiar dictTerritories
    // Puedes realizar aquí cualquier lógica adicional relacionada con el mapa
    // Aplicar la clase "selected" dinámicamente a cada territorio
    const territories = document.querySelectorAll('g[id^="T"]');
    territories.forEach((territory) => {
      const territoryId = territory.getAttribute('id');
      const isSelected = dictTerritories[territoryId];
      if (isSelected) {
        territory.classList.add('selected');
      } else {
        territory.classList.remove('selected');
      }
    });
  }, [dictTerritories]);

  
  const handleTerritoryClick = (event) => {
    const { id } = event.currentTarget;
    const territoryNumber = parseInt(id.split('T')[1]);
    // Si es que la ventan de territoryModal esta abierta
    // se setea el territorio seleccionado
    if (showTerritoryModal && selectedTerritory === null) {
      setSelectedTerritory(territoryNumber);
      const dictTerritoriesCopy = { ...dictTerritories };
      dictTerritoriesCopy[id] = true;
      setDictTerritories(dictTerritoriesCopy);
    }
    // Si selectedTerritory es el mismo que territoryNumber
    // se setea selectedTerritory a null
    else if (showTerritoryModal && selectedTerritory === territoryNumber) {
      setSelectedTerritory(null);
      const dictTerritoriesCopy = { ...dictTerritories };
      dictTerritoriesCopy[id] = false;
      setDictTerritories(dictTerritoriesCopy);
    }
  };
  // console.log("BoarData");
  const territories = boardData.territories;
  const troops = boardData.troops;
  // console.log(troops);
  const diceTerritoryNumbers = [];
  
  if (territories !== undefined) {
    Object.values(territories).map((territory) => {
      diceTerritoryNumbers.push(territory.number);
    });
  }
  // console.log(diceTerritoryNumbers);
  if (territories !== undefined) {
    return (
      <div className="Mapa">
        <svg id="Mapa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1284.15 862.93">
          <g id="A">
            <g id="T1" onClick={handleTerritoryClick}>
              <polygon className="cls-22" points="223.27 796.46 198.43 796.46 186.01 817.97 198.43 839.48 223.27 839.48 235.69 817.97 223.27 796.46"/>
              <polygon className="cls-22" points="223.27 753.56 198.43 753.56 186.01 775.07 198.43 796.58 223.27 796.58 235.69 775.07 223.27 753.56"/>
              <polygon className="cls-22" points="223.27 710.53 198.43 710.53 186.01 732.05 198.43 753.56 223.27 753.56 235.69 732.05 223.27 710.53"/>
              <polygon className="cls-22" points="223.27 667.51 198.43 667.51 186.01 689.02 198.43 710.53 223.27 710.53 235.69 689.02 223.27 667.51"/>
              <polygon className="cls-22" points="223.27 624.49 198.43 624.49 186.01 646 198.43 667.51 223.27 667.51 235.69 646 223.27 624.49"/>
              <polygon className="cls-22" points="223.27 581.46 198.43 581.46 186.01 602.98 198.43 624.49 223.27 624.49 235.69 602.98 223.27 581.46"/>
              <polygon className="cls-22" points="186.05 775.07 161.21 775.07 148.79 796.58 161.21 818.09 186.05 818.09 198.47 796.58 186.05 775.07"/>
              <polygon className="cls-22" points="186.05 732.05 161.21 732.05 148.79 753.56 161.21 775.07 186.05 775.07 198.47 753.56 186.05 732.05"/>
              <polygon className="cls-22" points="186.05 689.02 161.21 689.02 148.79 710.53 161.21 732.05 186.05 732.05 198.47 710.53 186.05 689.02"/>
              <polygon className="cls-22" points="186.05 646 161.21 646 148.79 667.51 161.21 689.02 186.05 689.02 198.47 667.51 186.05 646"/>
              <polygon className="cls-22" points="186.05 602.98 161.21 602.98 148.79 624.49 161.21 646 186.05 646 198.47 624.49 186.05 602.98"/>
              <polygon className="cls-22" points="186.05 559.95 161.21 559.95 148.79 581.46 161.21 602.98 186.05 602.98 198.47 581.46 186.05 559.95"/>
              <polygon className="cls-22" points="148.84 581.46 124 581.46 111.58 602.98 124 624.49 148.84 624.49 161.26 602.98 148.84 581.46"/>
            </g>
            <g id="T2" onClick={handleTerritoryClick}>
              <polygon className="cls-25" points="334.91 602.85 310.07 602.85 297.65 624.37 310.07 645.88 334.91 645.88 347.33 624.37 334.91 602.85"/>
              <polygon className="cls-25" points="297.7 667.39 272.86 667.39 260.44 688.9 272.86 710.41 297.7 710.41 310.12 688.9 297.7 667.39"/>
              <polygon className="cls-25" points="297.7 624.37 272.86 624.37 260.44 645.88 272.86 667.39 297.7 667.39 310.12 645.88 297.7 624.37"/>
              <polygon className="cls-25" points="297.7 581.34 272.86 581.34 260.44 602.85 272.86 624.37 297.7 624.37 310.12 602.85 297.7 581.34"/>
              <polygon className="cls-25" points="260.48 774.95 235.64 774.95 223.22 796.46 235.64 817.97 260.48 817.97 272.9 796.46 260.48 774.95"/>
              <polygon className="cls-25" points="260.48 731.92 235.64 731.92 223.22 753.44 235.64 774.95 260.48 774.95 272.9 753.44 260.48 731.92"/>
              <polygon className="cls-25" points="260.48 688.9 235.64 688.9 223.22 710.41 235.64 731.92 260.48 731.92 272.9 710.41 260.48 688.9"/>
              <polygon className="cls-25" points="260.48 645.88 235.64 645.88 223.22 667.39 235.64 688.9 260.48 688.9 272.9 667.39 260.48 645.88"/>
              <polygon className="cls-25" points="260.48 602.85 235.64 602.85 223.22 624.37 235.64 645.88 260.48 645.88 272.9 624.37 260.48 602.85"/>
            </g>
            <g id="T3" onClick={handleTerritoryClick}>
              <polygon className="cls-11" points="223.27 538.32 198.43 538.32 186.01 559.83 198.43 581.34 223.27 581.34 235.69 559.83 223.27 538.32"/>
              <polygon className="cls-11" points="223.27 495.3 198.43 495.3 186.01 516.81 198.43 538.32 223.27 538.32 235.69 516.81 223.27 495.3"/>
              <polygon className="cls-11" points="186.05 516.81 161.21 516.81 148.79 538.32 161.21 559.83 186.05 559.83 198.47 538.32 186.05 516.81"/>
              <polygon className="cls-11" points="186.05 473.78 161.21 473.78 148.79 495.3 161.21 516.81 186.05 516.81 198.47 495.3 186.05 473.78"/>
              <polygon className="cls-11" points="148.84 538.32 124 538.32 111.58 559.83 124 581.34 148.84 581.34 161.26 559.83 148.84 538.32"/>
              <polygon className="cls-11" points="148.84 495.3 124 495.3 111.58 516.81 124 538.32 148.84 538.32 161.26 516.81 148.84 495.3"/>
            </g>
            <g id="T4" onClick={handleTerritoryClick}>
              <polygon className="cls-3" points="372.13 581.34 347.29 581.34 334.87 602.85 347.29 624.37 372.13 624.37 384.55 602.85 372.13 581.34"/>
              <polygon className="cls-3" points="372.13 538.32 347.29 538.32 334.87 559.83 347.29 581.34 372.13 581.34 384.55 559.83 372.13 538.32"/>
              <polygon className="cls-3" points="372.13 495.3 347.29 495.3 334.87 516.81 347.29 538.32 372.13 538.32 384.55 516.81 372.13 495.3"/>
              <polygon className="cls-3" points="334.91 559.83 310.07 559.83 297.65 581.34 310.07 602.85 334.91 602.85 347.33 581.34 334.91 559.83"/>
              <polygon className="cls-3" points="334.91 516.81 310.07 516.81 297.65 538.32 310.07 559.83 334.91 559.83 347.33 538.32 334.91 516.81"/>
              <polygon className="cls-3" points="334.91 473.78 310.07 473.78 297.65 495.3 310.07 516.81 334.91 516.81 347.33 495.3 334.91 473.78"/>
              <polygon className="cls-3" points="297.7 538.32 272.86 538.32 260.44 559.83 272.86 581.34 297.7 581.34 310.12 559.83 297.7 538.32"/>
              <polygon className="cls-3" points="297.7 495.3 272.86 495.3 260.44 516.81 272.86 538.32 297.7 538.32 310.12 516.81 297.7 495.3"/>
              <polygon className="cls-3" points="297.7 452.27 272.86 452.27 260.44 473.78 272.86 495.3 297.7 495.3 310.12 473.78 297.7 452.27"/>
              <polygon className="cls-3" points="260.48 559.83 235.64 559.83 223.22 581.34 235.64 602.85 260.48 602.85 272.9 581.34 260.48 559.83"/>
              <polygon className="cls-3" points="260.48 516.81 235.64 516.81 223.22 538.32 235.64 559.83 260.48 559.83 272.9 538.32 260.48 516.81"/>
              <polygon className="cls-3" points="260.48 473.78 235.64 473.78 223.22 495.3 235.64 516.81 260.48 516.81 272.9 495.3 260.48 473.78"/>
            </g>
            <g id="T5" onClick={handleTerritoryClick}>
              <polygon className="cls-18" points="260.48 430.76 235.64 430.76 223.22 452.27 235.64 473.78 260.48 473.78 272.9 452.27 260.48 430.76"/>
              <polygon className="cls-18" points="223.27 452.27 198.43 452.27 186.01 473.78 198.43 495.3 223.27 495.3 235.69 473.78 223.27 452.27"/>
              <polygon className="cls-18" points="223.27 409.25 198.43 409.25 186.01 430.76 198.43 452.27 223.27 452.27 235.69 430.76 223.27 409.25"/>
              <polygon className="cls-18" points="186.05 430.76 161.21 430.76 148.79 452.27 161.21 473.78 186.05 473.78 198.47 452.27 186.05 430.76"/>
              <polygon className="cls-18" points="186.05 387.74 161.21 387.74 148.79 409.25 161.21 430.76 186.05 430.76 198.47 409.25 186.05 387.74"/>
              <polygon className="cls-18" points="148.84 452.27 124 452.27 111.58 473.78 124 495.3 148.84 495.3 161.26 473.78 148.84 452.27"/>
              <polygon className="cls-18" points="148.84 409.25 124 409.25 111.58 430.76 124 452.27 148.84 452.27 161.26 430.76 148.84 409.25"/>
              <polygon className="cls-18" points="111.62 387.74 86.78 387.74 74.36 409.25 86.78 430.76 111.62 430.76 124.04 409.25 111.62 387.74"/>
            </g>
            <g id="F1">
              <circle id="card" className="cls-13" cx="186.71" cy="697.94" r="21.5"/>
              <text id="index" className="cls-43" transform="translate(178.38 705.51)"><tspan x="0" y="0">{diceTerritoryNumbers[0]}</tspan></text>
            </g>
            <g id="F2">
              <circle id="card-2" data-name="card" className="cls-8" cx="269.71" cy="654.94" r="21.5"/>
              <text id="index-2" data-name="index" className="cls-43" transform="translate(261.9 662.67)"><tspan x="0" y="0">{diceTerritoryNumbers[1]}</tspan></text>
            </g>
            <g id="F3">
              <circle id="card-3" data-name="card" className="cls-28" cx="173.71" cy="522.94" r="21.5"/>
              <text id="index-3" data-name="index" className="cls-43" transform="translate(165.54 531.39)"><tspan x="0" y="0">{diceTerritoryNumbers[2]}</tspan></text>
            </g>
            <g id="F4">
              <circle id="card-4" data-name="card" className="cls-4" cx="297.71" cy="538.94" r="21.5"/>
              <text id="index-4" data-name="index" className="cls-43" transform="translate(289.54 546.39)"><tspan x="0" y="0">{diceTerritoryNumbers[3]}</tspan></text>
            </g>
            <g id="F5">
              <circle id="card-5" data-name="card" className="cls-30" cx="177.71" cy="441.94" r="21.5"/>
              <text id="index-5" data-name="index" className="cls-43" transform="translate(169.54 450.07)"><tspan x="0" y="0">{diceTerritoryNumbers[4]}</tspan></text>
            </g>
          </g>
          <g id="B">
            <g id="T6" onClick={handleTerritoryClick}>
              <polygon className="cls-15" points="223.27 280.18 198.43 280.18 186.01 301.69 198.43 323.2 223.27 323.2 235.69 301.69 223.27 280.18"/>
              <polygon className="cls-15" points="223.27 237.16 198.43 237.16 186.01 258.67 198.43 280.18 223.27 280.18 235.69 258.67 223.27 237.16"/>
              <polygon className="cls-15" points="186.05 344.72 161.21 344.72 148.79 366.23 161.21 387.74 186.05 387.74 198.47 366.23 186.05 344.72"/>
              <polygon className="cls-15" points="186.05 301.69 161.21 301.69 148.79 323.2 161.21 344.72 186.05 344.72 198.47 323.2 186.05 301.69"/>
              <polygon className="cls-15" points="186.05 258.67 161.21 258.67 148.79 280.18 161.21 301.69 186.05 301.69 198.47 280.18 186.05 258.67"/>
              <polygon className="cls-15" points="148.84 366.23 124 366.23 111.58 387.74 124 409.25 148.84 409.25 161.26 387.74 148.84 366.23"/>
              <polygon className="cls-15" points="148.84 323.2 124 323.2 111.58 344.72 124 366.23 148.84 366.23 161.26 344.72 148.84 323.2"/>
              <polygon className="cls-15" points="148.84 280.18 124 280.18 111.58 301.69 124 323.2 148.84 323.2 161.26 301.69 148.84 280.18"/>
              <polygon className="cls-15" points="148.84 237.16 124 237.16 111.58 258.67 124 280.18 148.84 280.18 161.26 258.67 148.84 237.16"/>
              <polygon className="cls-15" points="111.62 344.72 86.78 344.72 74.36 366.23 86.78 387.74 111.62 387.74 124.04 366.23 111.62 344.72"/>
              <polygon className="cls-15" points="111.62 301.69 86.78 301.69 74.36 323.2 86.78 344.72 111.62 344.72 124.04 323.2 111.62 301.69"/>
            </g>
            <g id="T7" onClick={handleTerritoryClick}>
              <polygon className="cls-22" points="186.45 215.37 161.61 215.37 149.19 236.88 161.61 258.39 186.45 258.39 198.87 236.88 186.45 215.37"/>
              <polygon className="cls-22" points="149.23 193.85 124.39 193.85 111.97 215.37 124.39 236.88 149.23 236.88 161.65 215.37 149.23 193.85"/>
              <polygon className="cls-22" points="149.23 150.83 124.39 150.83 111.97 172.34 124.39 193.85 149.23 193.85 161.65 172.34 149.23 150.83"/>
              <polygon className="cls-22" points="186.45 172.34 161.61 172.34 149.19 193.85 161.61 215.37 186.45 215.37 198.87 193.85 186.45 172.34"/>
              <polygon className="cls-22" points="186.45 129.32 161.61 129.32 149.19 150.83 161.61 172.34 186.45 172.34 198.87 150.83 186.45 129.32"/>
              <polygon className="cls-22" points="223.66 193.85 198.82 193.85 186.4 215.37 198.82 236.88 223.66 236.88 236.08 215.37 223.66 193.85"/>
              <polygon className="cls-22" points="223.66 150.83 198.82 150.83 186.4 172.34 198.82 193.85 223.66 193.85 236.08 172.34 223.66 150.83"/>
              <polygon className="cls-22" points="260.9 215.37 236.06 215.37 223.64 236.88 236.06 258.39 260.9 258.39 273.31 236.88 260.9 215.37"/>
              <polygon className="cls-22" points="260.9 172.34 236.06 172.34 223.64 193.85 236.06 215.37 260.9 215.37 273.31 193.85 260.9 172.34"/>
              <polygon className="cls-22" points="260.9 129.32 236.06 129.32 223.64 150.83 236.06 172.34 260.9 172.34 273.31 150.83 260.9 129.32"/>
              <polygon className="cls-22" points="298.09 193.85 273.25 193.85 260.83 215.37 273.25 236.88 298.09 236.88 310.51 215.37 298.09 193.85"/>
              <polygon className="cls-22" points="298.09 150.83 273.25 150.83 260.83 172.34 273.25 193.85 298.09 193.85 310.51 172.34 298.09 150.83"/>
              <polygon className="cls-22" points="335.34 172.34 310.5 172.34 298.09 193.85 310.5 215.37 335.34 215.37 347.76 193.85 335.34 172.34"/>
              <polygon className="cls-22" points="335.34 129.32 310.5 129.32 298.09 150.83 310.5 172.34 335.34 172.34 347.76 150.83 335.34 129.32"/>
              <polygon className="cls-22" points="372.52 150.83 347.68 150.83 335.26 172.34 347.68 193.85 372.52 193.85 384.94 172.34 372.52 150.83"/>
              <polygon className="cls-22" points="112 172.34 87.16 172.34 74.74 193.85 87.16 215.37 112 215.37 124.42 193.85 112 172.34"/>
              <polygon className="cls-22" points="112 129.32 87.16 129.32 74.74 150.83 87.16 172.34 112 172.34 124.42 150.83 112 129.32"/>
              <polygon className="cls-22" points="74.7 150.83 49.86 150.83 37.44 172.34 49.86 193.85 74.7 193.85 87.12 172.34 74.7 150.83"/>
              <polygon className="cls-22" points="37.55 129.32 12.71 129.32 .29 150.83 12.71 172.34 37.55 172.34 49.97 150.83 37.55 129.32"/>
            </g>
            <g id="T8" onClick={handleTerritoryClick}>
              <polygon className="cls-18" points="37.55 86.3 12.71 86.3 .29 107.81 12.71 129.32 37.55 129.32 49.97 107.81 37.55 86.3"/>
              <polygon className="cls-18" points="74.7 107.81 49.86 107.81 37.44 129.32 49.86 150.83 74.7 150.83 87.12 129.32 74.7 107.81"/>
              <polygon className="cls-18" points="74.7 64.78 49.86 64.78 37.44 86.3 49.86 107.81 74.7 107.81 87.12 86.3 74.7 64.78"/>
              <polygon className="cls-18" points="112 86.3 87.16 86.3 74.74 107.81 87.16 129.32 112 129.32 124.42 107.81 112 86.3"/>
              <polygon className="cls-18" points="112 43.27 87.16 43.27 74.74 64.78 87.16 86.3 112 86.3 124.42 64.78 112 43.27"/>
            </g>
            <g id="T9" onClick={handleTerritoryClick}>
              <polygon className="cls-7" points="149.23 107.81 124.39 107.81 111.97 129.32 124.39 150.83 149.23 150.83 161.65 129.32 149.23 107.81"/>
              <polygon className="cls-7" points="149.23 64.78 124.39 64.78 111.97 86.3 124.39 107.81 149.23 107.81 161.65 86.3 149.23 64.78"/>
              <polygon className="cls-7" points="186.45 86.3 161.61 86.3 149.19 107.81 161.61 129.32 186.45 129.32 198.87 107.81 186.45 86.3"/>
              <polygon className="cls-7" points="223.66 107.81 198.82 107.81 186.4 129.32 198.82 150.83 223.66 150.83 236.08 129.32 223.66 107.81"/>
              <polygon className="cls-7" points="223.66 64.78 198.82 64.78 186.4 86.3 198.82 107.81 223.66 107.81 236.08 86.3 223.66 64.78"/>
              <polygon className="cls-7" points="260.9 86.3 236.06 86.3 223.64 107.81 236.06 129.32 260.9 129.32 273.31 107.81 260.9 86.3"/>
              <polygon className="cls-7" points="298.09 107.81 273.25 107.81 260.83 129.32 273.25 150.83 298.09 150.83 310.51 129.32 298.09 107.81"/>
              <polygon className="cls-7" points="298.09 64.78 273.25 64.78 260.83 86.3 273.25 107.81 298.09 107.81 310.51 86.3 298.09 64.78"/>
              <polygon className="cls-7" points="335.34 86.3 310.5 86.3 298.09 107.81 310.5 129.32 335.34 129.32 347.76 107.81 335.34 86.3"/>
              <polygon className="cls-7" points="372.52 107.81 347.68 107.81 335.26 129.32 347.68 150.83 372.52 150.83 384.94 129.32 372.52 107.81"/>
              <polygon className="cls-7" points="372.52 64.78 347.68 64.78 335.26 86.3 347.68 107.81 372.52 107.81 384.94 86.3 372.52 64.78"/>
              <polygon className="cls-7" points="335.34 43.27 310.5 43.27 298.09 64.78 310.5 86.3 335.34 86.3 347.76 64.78 335.34 43.27"/>
            </g>
            <g id="T10" onClick={handleTerritoryClick}>
              <polygon className="cls-9" points="543.21 64.78 518.37 64.78 505.95 86.3 518.37 107.81 543.21 107.81 555.63 86.3 543.21 64.78"/>
              <polygon className="cls-9" points="543.21 21.76 518.37 21.76 505.95 43.27 518.37 64.78 543.21 64.78 555.63 43.27 543.21 21.76"/>
              <polygon className="cls-9" points="543.21 107.81 518.37 107.81 505.95 129.32 518.37 150.83 543.21 150.83 555.63 129.32 543.21 107.81"/>
              <polygon className="cls-9" points="468.61 64.78 443.77 64.78 431.35 86.3 443.77 107.81 468.61 107.81 481.03 86.3 468.61 64.78"/>
              <polygon className="cls-9" points="468.61 21.76 443.77 21.76 431.35 43.27 443.77 64.78 468.61 64.78 481.03 43.27 468.61 21.76"/>
              <polygon className="cls-9" points="468.61 107.81 443.77 107.81 431.35 129.32 443.77 150.83 468.61 150.83 481.03 129.32 468.61 107.81"/>
              <polygon className="cls-9" points="505.91 43.27 481.07 43.27 468.66 64.78 481.07 86.3 505.91 86.3 518.33 64.78 505.91 43.27"/>
              <polygon className="cls-9" points="505.91 .25 481.07 .25 468.66 21.76 481.07 43.27 505.91 43.27 518.33 21.76 505.91 .25"/>
              <polygon className="cls-9" points="505.91 86.3 481.07 86.3 468.66 107.81 481.07 129.32 505.91 129.32 518.33 107.81 505.91 86.3"/>
              <polygon className="cls-9" points="505.91 129.32 481.07 129.32 468.66 150.83 481.07 172.34 505.91 172.34 518.33 150.83 505.91 129.32"/>
            </g>
            <g id="F6">
              <circle id="card-6" data-name="card" className="cls-6" cx="151.71" cy="322.94" r="21.5"/>
              <text id="index-6" data-name="index" className="cls-43" transform="translate(143.54 330.98)"><tspan x="0" y="0">{diceTerritoryNumbers[5]}</tspan></text>
            </g>
            <g id="F7">
              <circle id="card-7" data-name="card" className="cls-34" cx="195.71" cy="196.94" r="21.5"/>
              <text id="index-7" data-name="index" className="cls-43" transform="translate(187.54 204.94)"><tspan x="0" y="0">{diceTerritoryNumbers[6]}</tspan></text>
            </g>
            <g id="F8">
              <circle id="card-8" data-name="card" className="cls-24" cx="71.71" cy="100.94" r="21.5"/>
              <text id="index-8" data-name="index" className="cls-43" transform="translate(64.54 110.91)"><tspan x="0" y="0">{diceTerritoryNumbers[7]}</tspan></text>
            </g>
            <g id="F9">
              <circle id="card-9" data-name="card" className="cls-32" cx="217.71" cy="107.94" r="21.5"/>
              <text id="index-9" data-name="index" className="cls-43" transform="translate(210.54 116.89)"><tspan x="0" y="0">{diceTerritoryNumbers[8]}</tspan></text>
            </g>
            <g id="F10">
              <circle id="card-10" data-name="card" className="cls-29" cx="493.71" cy="78.94" r="21.5"/>
              <text id="index-10" data-name="index" className="cls-43" transform="translate(478.95 88.13)"><tspan className="cls-41" x="0" y="0">{diceTerritoryNumbers[9]}</tspan></text>
            </g>
          </g>
          <g id="C">
            <g id="T11" onClick={handleTerritoryClick}>
              <polygon className="cls-18" points="694.23 153.92 669.39 153.92 656.97 175.44 669.39 196.95 694.23 196.95 706.65 175.44 694.23 153.92"/>
              <polygon className="cls-18" points="694.23 110.9 669.39 110.9 656.97 132.41 669.39 153.92 694.23 153.92 706.65 132.41 694.23 110.9"/>
              <polygon className="cls-18" points="619.63 153.92 594.79 153.92 582.37 175.44 594.79 196.95 619.63 196.95 632.05 175.44 619.63 153.92"/>
              <polygon className="cls-18" points="619.63 110.9 594.79 110.9 582.37 132.41 594.79 153.92 619.63 153.92 632.05 132.41 619.63 110.9"/>
              <polygon className="cls-18" points="656.93 132.41 632.09 132.41 619.67 153.92 632.09 175.44 656.93 175.44 669.35 153.92 656.93 132.41"/>
              <polygon className="cls-18" points="656.93 89.39 632.09 89.39 619.67 110.9 632.09 132.41 656.93 132.41 669.35 110.9 656.93 89.39"/>
              <polygon className="cls-18" points="656.93 175.44 632.09 175.44 619.67 196.95 632.09 218.46 656.93 218.46 669.35 196.95 656.93 175.44"/>
            </g>
            <g id="T12" onClick={handleTerritoryClick}>
              <g id="_11" data-name="11">
                <polygon className="cls-11" points="694.23 320.52 669.39 320.52 656.97 342.03 669.39 363.54 694.23 363.54 706.65 342.03 694.23 320.52"/>
                <polygon className="cls-11" points="694.23 277.5 669.39 277.5 656.97 299.01 669.39 320.52 694.23 320.52 706.65 299.01 694.23 277.5"/>
                <polygon className="cls-11" points="619.63 320.52 594.79 320.52 582.37 342.03 594.79 363.54 619.63 363.54 632.05 342.03 619.63 320.52"/>
                <polygon className="cls-11" points="619.63 277.5 594.79 277.5 582.37 299.01 594.79 320.52 619.63 320.52 632.05 299.01 619.63 277.5"/>
                <polygon className="cls-11" points="656.93 299.01 632.09 299.01 619.67 320.52 632.09 342.03 656.93 342.03 669.35 320.52 656.93 299.01"/>
                <polygon className="cls-11" points="656.93 255.98 632.09 255.98 619.67 277.5 632.09 299.01 656.93 299.01 669.35 277.5 656.93 255.98"/>
                <polygon className="cls-11" points="656.93 342.03 632.09 342.03 619.67 363.54 632.09 385.05 656.93 385.05 669.35 363.54 656.93 342.03"/>
              </g>
              <polygon className="cls-11" points="731.24 299.01 706.4 299.01 693.98 320.52 706.4 342.03 731.24 342.03 743.66 320.52 731.24 299.01"/>
              <polygon className="cls-11" points="731.24 255.98 706.4 255.98 693.98 277.5 706.4 299.01 731.24 299.01 743.66 277.5 731.24 255.98"/>
            </g>
            <g id="T13" onClick={handleTerritoryClick}>
              <polygon className="cls-9" points="768.58 320.52 743.74 320.52 731.32 342.03 743.74 363.54 768.58 363.54 781 342.03 768.58 320.52"/>
              <polygon className="cls-9" points="768.58 277.5 743.74 277.5 731.32 299.01 743.74 320.52 768.58 320.52 781 299.01 768.58 277.5"/>
              <polygon className="cls-9" points="805.84 342.03 781 342.03 768.58 363.54 781 385.05 805.84 385.05 818.26 363.54 805.84 342.03"/>
              <polygon className="cls-9" points="805.84 299.01 781 299.01 768.58 320.52 781 342.03 805.84 342.03 818.26 320.52 805.84 299.01"/>
              <polygon className="cls-9" points="842.92 320.52 818.08 320.52 805.66 342.03 818.08 363.54 842.92 363.54 855.34 342.03 842.92 320.52"/>
              <polygon className="cls-9" points="842.92 277.5 818.08 277.5 805.66 299.01 818.08 320.52 842.92 320.52 855.34 299.01 842.92 277.5"/>
              <polygon className="cls-9" points="880.25 342.03 855.41 342.03 842.99 363.54 855.41 385.05 880.25 385.05 892.67 363.54 880.25 342.03"/>
              <polygon className="cls-9" points="880.25 299.01 855.41 299.01 842.99 320.52 855.41 342.03 880.25 342.03 892.67 320.52 880.25 299.01"/>
              <polygon className="cls-9" points="842.92 363.54 818.08 363.54 805.66 385.05 818.08 406.57 842.92 406.57 855.34 385.05 842.92 363.54"/>
              <polygon className="cls-9" points="880.25 385.05 855.41 385.05 842.99 406.57 855.41 428.08 880.25 428.08 892.67 406.57 880.25 385.05"/>
            </g>
            <g id="T14" onClick={handleTerritoryClick}>
              <polygon className="cls-3" points="805.72 212.82 780.88 212.82 768.46 234.33 780.88 255.84 805.72 255.84 818.14 234.33 805.72 212.82"/>
              <polygon className="cls-3" points="805.72 169.8 780.88 169.8 768.46 191.31 780.88 212.82 805.72 212.82 818.14 191.31 805.72 169.8"/>
              <polygon className="cls-3" points="842.8 191.31 817.96 191.31 805.54 212.82 817.96 234.33 842.8 234.33 855.22 212.82 842.8 191.31"/>
              <polygon className="cls-3" points="842.8 148.29 817.96 148.29 805.54 169.8 817.96 191.31 842.8 191.31 855.22 169.8 842.8 148.29"/>
              <polygon className="cls-3" points="880.13 212.82 855.29 212.82 842.87 234.33 855.29 255.84 880.13 255.84 892.55 234.33 880.13 212.82"/>
              <polygon className="cls-3" points="880.13 169.8 855.29 169.8 842.87 191.31 855.29 212.82 880.13 212.82 892.55 191.31 880.13 169.8"/>
              <polygon className="cls-3" points="842.8 234.33 817.96 234.33 805.54 255.84 817.96 277.36 842.8 277.36 855.22 255.84 842.8 234.33"/>
              <polygon className="cls-3" points="880.13 255.84 855.29 255.84 842.87 277.36 855.29 298.87 880.13 298.87 892.55 277.36 880.13 255.84"/>
              <polygon className="cls-3" points="805.84 255.98 781 255.98 768.58 277.5 781 299.01 805.84 299.01 818.26 277.5 805.84 255.98"/>
              <polygon className="cls-3" points="768.58 234.47 743.74 234.47 731.32 255.98 743.74 277.5 768.58 277.5 781 255.98 768.58 234.47"/>
              <polygon className="cls-3" points="880.13 126.77 855.29 126.77 842.87 148.29 855.29 169.8 880.13 169.8 892.55 148.29 880.13 126.77"/>
            </g>
            <g id="T15" onClick={handleTerritoryClick}>
              <polygon className="cls-1" points="917.27 320.52 892.43 320.52 880.01 342.03 892.43 363.54 917.27 363.54 929.69 342.03 917.27 320.52"/>
              <polygon className="cls-1" points="917.27 277.5 892.43 277.5 880.01 299.01 892.43 320.52 917.27 320.52 929.69 299.01 917.27 277.5"/>
              <polygon className="cls-1" points="917.27 363.54 892.43 363.54 880.01 385.05 892.43 406.57 917.27 406.57 929.69 385.05 917.27 363.54"/>
              <polygon className="cls-1" points="954.57 342.03 929.73 342.03 917.31 363.54 929.73 385.05 954.57 385.05 966.99 363.54 954.57 342.03"/>
              <polygon className="cls-1" points="954.57 299.01 929.73 299.01 917.31 320.52 929.73 342.03 954.57 342.03 966.99 320.52 954.57 299.01"/>
              <polygon className="cls-1" points="917.27 406.71 892.43 406.71 880.01 428.22 892.43 449.73 917.27 449.73 929.69 428.22 917.27 406.71"/>
              <polygon className="cls-1" points="991.81 320.52 966.97 320.52 954.55 342.03 966.97 363.54 991.81 363.54 1004.23 342.03 991.81 320.52"/>
              <polygon className="cls-1" points="991.81 277.5 966.97 277.5 954.55 299.01 966.97 320.52 991.81 320.52 1004.23 299.01 991.81 277.5"/>
              <polygon className="cls-1" points="954.51 385.19 929.67 385.19 917.25 406.71 929.67 428.22 954.51 428.22 966.93 406.71 954.51 385.19"/>
              <polygon className="cls-1" points="991.59 363.68 966.76 363.68 954.34 385.19 966.76 406.71 991.59 406.71 1004.01 385.19 991.59 363.68"/>
              <polygon className="cls-1" points="1028.9 299.01 1004.06 299.01 991.64 320.52 1004.06 342.03 1028.9 342.03 1041.32 320.52 1028.9 299.01"/>
              <polygon className="cls-1" points="1028.83 342.17 1003.99 342.17 991.58 363.68 1003.99 385.19 1028.83 385.19 1041.25 363.68 1028.83 342.17"/>
            </g>
            <g id="T16" onClick={handleTerritoryClick}>
              <polygon className="cls-15" points="917.35 191.45 892.51 191.45 880.09 212.96 892.51 234.47 917.35 234.47 929.77 212.96 917.35 191.45"/>
              <polygon className="cls-15" points="917.35 148.43 892.51 148.43 880.09 169.94 892.51 191.45 917.35 191.45 929.77 169.94 917.35 148.43"/>
              <polygon className="cls-15" points="917.35 234.47 892.51 234.47 880.09 255.98 892.51 277.5 917.35 277.5 929.77 255.98 917.35 234.47"/>
              <polygon className="cls-15" points="954.65 212.96 929.81 212.96 917.39 234.47 929.81 255.98 954.65 255.98 967.07 234.47 954.65 212.96"/>
              <polygon className="cls-15" points="954.65 169.94 929.81 169.94 917.39 191.45 929.81 212.96 954.65 212.96 967.07 191.45 954.65 169.94"/>
              <polygon className="cls-15" points="954.65 255.98 929.81 255.98 917.39 277.5 929.81 299.01 954.65 299.01 967.07 277.5 954.65 255.98"/>
              <polygon className="cls-15" points="991.89 191.45 967.05 191.45 954.63 212.96 967.05 234.47 991.89 234.47 1004.31 212.96 991.89 191.45"/>
              <polygon className="cls-15" points="991.89 148.43 967.05 148.43 954.63 169.94 967.05 191.45 991.89 191.45 1004.31 169.94 991.89 148.43"/>
              <polygon className="cls-15" points="991.89 234.47 967.05 234.47 954.63 255.98 967.05 277.5 991.89 277.5 1004.31 255.98 991.89 234.47"/>
              <polygon className="cls-15" points="1029.06 212.82 1004.22 212.82 991.8 234.33 1004.22 255.84 1029.06 255.84 1041.48 234.33 1029.06 212.82"/>
              <polygon className="cls-15" points="1029.06 169.8 1004.22 169.8 991.8 191.31 1004.22 212.82 1029.06 212.82 1041.48 191.31 1029.06 169.8"/>
              <polygon className="cls-15" points="1029.06 255.84 1004.22 255.84 991.8 277.36 1004.22 298.87 1029.06 298.87 1041.48 277.36 1029.06 255.84"/>
            </g>
            <g id="T17" onClick={handleTerritoryClick}>
              <polygon className="cls-18" points="1066.22 191.45 1041.38 191.45 1028.96 212.96 1041.38 234.47 1066.22 234.47 1078.64 212.96 1066.22 191.45"/>
              <polygon className="cls-18" points="1066.22 148.43 1041.38 148.43 1028.96 169.94 1041.38 191.45 1066.22 191.45 1078.64 169.94 1066.22 148.43"/>
              <polygon className="cls-18" points="1066.22 234.47 1041.38 234.47 1028.96 255.98 1041.38 277.5 1066.22 277.5 1078.64 255.98 1066.22 234.47"/>
              <polygon className="cls-18" points="1103.46 169.94 1078.62 169.94 1066.2 191.45 1078.62 212.96 1103.46 212.96 1115.88 191.45 1103.46 169.94"/>
              <polygon className="cls-18" points="1103.46 126.91 1078.62 126.91 1066.2 148.43 1078.62 169.94 1103.46 169.94 1115.88 148.43 1103.46 126.91"/>
              <polygon className="cls-18" points="1103.46 212.96 1078.62 212.96 1066.2 234.47 1078.62 255.98 1103.46 255.98 1115.88 234.47 1103.46 212.96"/>
              <polygon className="cls-18" points="1140.63 191.31 1115.79 191.31 1103.37 212.82 1115.79 234.33 1140.63 234.33 1153.05 212.82 1140.63 191.31"/>
              <polygon className="cls-18" points="1140.63 148.29 1115.79 148.29 1103.37 169.8 1115.79 191.31 1140.63 191.31 1153.05 169.8 1140.63 148.29"/>
              <polygon className="cls-18" points="1140.63 234.33 1115.79 234.33 1103.37 255.84 1115.79 277.36 1140.63 277.36 1153.05 255.84 1140.63 234.33"/>
              <polygon className="cls-18" points="1066.14 277.5 1041.3 277.5 1028.88 299.01 1041.3 320.52 1066.14 320.52 1078.56 299.01 1066.14 277.5"/>
              <polygon className="cls-18" points="1103.38 255.98 1078.54 255.98 1066.12 277.5 1078.54 299.01 1103.38 299.01 1115.8 277.5 1103.38 255.98"/>
            </g>
            <g id="F11" onClick={handleTerritoryClick}>
              <circle id="card-11" data-name="card" className="cls-5" cx="644.71" cy="153.94" r="21.5"/>
              <text id="index-11" data-name="index" className="cls-43" transform="translate(630.22 162.15)"><tspan className="cls-42" x="0" y="0">{diceTerritoryNumbers[10]}</tspan></text>
            </g>
            <g id="F12" onClick={handleTerritoryClick}>
              <circle id="card-12" data-name="card" className="cls-17" cx="656.71" cy="320.94" r="21.5"/>
              <text id="index-12" data-name="index" className="cls-43" transform="translate(641.84 329.62)"><tspan className="cls-38" x="0" y="0">{diceTerritoryNumbers[11]}</tspan></text>
            </g>
            <g id="F13" onClick={handleTerritoryClick}>
              <circle id="card-13" data-name="card" className="cls-16" cx="821.71" cy="344.94" r="21.5"/>
              <text id="index-13" data-name="index" className="cls-43" transform="translate(807.3 353.63)"><tspan className="cls-40" x="0" y="0">{diceTerritoryNumbers[12]}</tspan></text>
            </g>
            <g id="F14" onClick={handleTerritoryClick}>
              <circle id="card-14" data-name="card" className="cls-23" cx="821.71" cy="218.94" r="21.5"/>
              <text id="index-14" data-name="index" className="cls-43" transform="translate(806.44 227.27)"><tspan className="cls-44" x="0" y="0">{diceTerritoryNumbers[13]}</tspan></text>
            </g>
            <g id="F15" onClick={handleTerritoryClick}>
              <circle id="card-15" data-name="card" className="cls-31" cx="958.71" cy="365.94" r="21.5"/>
              <text id="index-15" data-name="index" className="cls-43" transform="translate(943.94 374.27)"><tspan className="cls-36" x="0" y="0">{diceTerritoryNumbers[14]}</tspan></text>
            </g>
            <g id="F16" onClick={handleTerritoryClick}>
              <circle id="card-16" data-name="card" className="cls-20" cx="957.71" cy="227.94" r="21.5"/>
              <text id="index-16" data-name="index" className="cls-43" transform="translate(942.97 236.27)"><tspan className="cls-41" x="0" y="0">{diceTerritoryNumbers[15]}</tspan></text>
            </g>
            <g id="F17" onClick={handleTerritoryClick}>
              <circle id="card-17" data-name="card" className="cls-12" cx="1090.71" cy="227.94" r="21.5"/>
              <text id="index-17" data-name="index" className="cls-43" transform="translate(1075.82 237.06)"><tspan className="cls-37" x="0" y="0">{diceTerritoryNumbers[16]}</tspan></text>
            </g>
          </g>
          <g id="D">
            <g id="T18" onClick={handleTerritoryClick}>
              <polygon className="cls-2" points="579.43 603.85 554.59 603.85 542.17 625.36 554.59 646.87 579.43 646.87 591.85 625.36 579.43 603.85"/>
              <polygon className="cls-2" points="542.13 539.32 517.29 539.32 504.87 560.83 517.29 582.34 542.13 582.34 554.55 560.83 542.13 539.32"/>
              <polygon className="cls-2" points="542.13 496.29 517.29 496.29 504.87 517.8 517.29 539.32 542.13 539.32 554.55 517.8 542.13 496.29"/>
              <polygon className="cls-2" points="579.43 517.8 554.59 517.8 542.17 539.32 554.59 560.83 579.43 560.83 591.85 539.32 579.43 517.8"/>
              <polygon className="cls-2" points="542.13 582.34 517.29 582.34 504.87 603.85 517.29 625.36 542.13 625.36 554.55 603.85 542.13 582.34"/>
              <polygon className="cls-2" points="579.43 560.83 554.59 560.83 542.17 582.34 554.59 603.85 579.43 603.85 591.85 582.34 579.43 560.83"/>
            </g>
            <g id="T19" onClick={handleTerritoryClick}>
              <polygon className="cls-3" points="616.73 496.29 591.89 496.29 579.47 517.8 591.89 539.32 616.73 539.32 629.15 517.8 616.73 496.29"/>
              <polygon className="cls-3" points="728.57 431.76 703.74 431.76 691.32 453.27 703.74 474.78 728.57 474.78 740.99 453.27 728.57 431.76"/>
              <polygon className="cls-3" points="579.43 474.78 554.59 474.78 542.17 496.29 554.59 517.8 579.43 517.8 591.85 496.29 579.43 474.78"/>
              <polygon className="cls-3" points="616.73 453.27 591.89 453.27 579.47 474.78 591.89 496.29 616.73 496.29 629.15 474.78 616.73 453.27"/>
              <polygon className="cls-3" points="654.18 517.8 629.34 517.8 616.92 539.32 629.34 560.83 654.18 560.83 666.6 539.32 654.18 517.8"/>
              <polygon className="cls-3" points="654.18 474.78 629.34 474.78 616.92 496.29 629.34 517.8 654.18 517.8 666.6 496.29 654.18 474.78"/>
              <polygon className="cls-3" points="691.33 496.29 666.49 496.29 654.07 517.8 666.49 539.32 691.33 539.32 703.75 517.8 691.33 496.29"/>
              <polygon className="cls-3" points="691.33 453.27 666.49 453.27 654.07 474.78 666.49 496.29 691.33 496.29 703.75 474.78 691.33 453.27"/>
              <polygon className="cls-3" points="728.57 474.78 703.74 474.78 691.32 496.29 703.74 517.8 728.57 517.8 740.99 496.29 728.57 474.78"/>
              <polygon className="cls-3" points="728.56 517.75 703.72 517.75 691.3 539.26 703.72 560.77 728.56 560.77 740.98 539.26 728.56 517.75"/>
              <polygon className="cls-3" points="765.93 496.11 741.09 496.11 728.67 517.62 741.09 539.13 765.93 539.13 778.35 517.62 765.93 496.11"/>
              <polygon className="cls-3" points="765.93 453.08 741.09 453.08 728.67 474.59 741.09 496.11 765.93 496.11 778.35 474.59 765.93 453.08"/>
            </g>
            <g id="T20" onClick={handleTerritoryClick}>
              <polygon className="cls-11" points="616.73 625.36 591.89 625.36 579.47 646.87 591.89 668.39 616.73 668.39 629.15 646.87 616.73 625.36"/>
              <polygon className="cls-11" points="616.73 539.32 591.89 539.32 579.47 560.83 591.89 582.34 616.73 582.34 629.15 560.83 616.73 539.32"/>
              <polygon className="cls-11" points="616.73 582.34 591.89 582.34 579.47 603.85 591.89 625.36 616.73 625.36 629.15 603.85 616.73 582.34"/>
              <polygon className="cls-11" points="654.18 646.87 629.34 646.87 616.92 668.39 629.34 689.9 654.18 689.9 666.6 668.39 654.18 646.87"/>
              <polygon className="cls-11" points="654.18 560.83 629.34 560.83 616.92 582.34 629.34 603.85 654.18 603.85 666.6 582.34 654.18 560.83"/>
              <polygon className="cls-11" points="654.18 603.85 629.34 603.85 616.92 625.36 629.34 646.87 654.18 646.87 666.6 625.36 654.18 603.85"/>
              <polygon className="cls-11" points="691.33 625.36 666.49 625.36 654.07 646.87 666.49 668.39 691.33 668.39 703.75 646.87 691.33 625.36"/>
              <polygon className="cls-11" points="691.33 539.32 666.49 539.32 654.07 560.83 666.49 582.34 691.33 582.34 703.75 560.83 691.33 539.32"/>
              <polygon className="cls-11" points="691.33 582.34 666.49 582.34 654.07 603.85 666.49 625.36 691.33 625.36 703.75 603.85 691.33 582.34"/>
              <polygon className="cls-11" points="728.69 603.8 703.85 603.8 691.43 625.31 703.85 646.82 728.69 646.82 741.11 625.31 728.69 603.8"/>
              <polygon className="cls-11" points="728.52 560.73 703.68 560.73 691.26 582.25 703.68 603.76 728.52 603.76 740.94 582.25 728.52 560.73"/>
              <polygon className="cls-11" points="728.77 646.87 703.93 646.87 691.51 668.39 703.93 689.9 728.77 689.9 741.19 668.39 728.77 646.87"/>
              <polygon className="cls-11" points="766.1 582.33 741.26 582.33 728.84 603.84 741.26 625.35 766.1 625.35 778.52 603.84 766.1 582.33"/>
              <polygon className="cls-11" points="765.93 539.27 741.09 539.27 728.67 560.78 741.09 582.29 765.93 582.29 778.35 560.78 765.93 539.27"/>
              <polygon className="cls-11" points="766.18 625.41 741.34 625.41 728.92 646.92 741.34 668.43 766.18 668.43 778.6 646.92 766.18 625.41"/>
            </g>
            <g id="T21" onClick={handleTerritoryClick}>
              <polygon className="cls-9" points="691.45 668.39 666.62 668.39 654.2 689.9 666.62 711.41 691.45 711.41 703.87 689.9 691.45 668.39"/>
              <polygon className="cls-9" points="728.77 689.95 703.93 689.95 691.51 711.46 703.93 732.98 728.77 732.98 741.19 711.46 728.77 689.95"/>
              <polygon className="cls-9" points="766.18 668.49 741.34 668.49 728.92 690 741.34 711.51 766.18 711.51 778.6 690 766.18 668.49"/>
              <polygon className="cls-9" points="803.06 646.87 778.22 646.87 765.8 668.39 778.22 689.9 803.06 689.9 815.48 668.39 803.06 646.87"/>
              <polygon className="cls-9" points="765.91 711.72 741.08 711.72 728.66 733.23 741.08 754.74 765.91 754.74 778.33 733.23 765.91 711.72"/>
              <polygon className="cls-9" points="803.33 690.26 778.49 690.26 766.07 711.77 778.49 733.28 803.33 733.28 815.75 711.77 803.33 690.26"/>
              <polygon className="cls-9" points="840.21 668.64 815.37 668.64 802.95 690.15 815.37 711.67 840.21 711.67 852.63 690.15 840.21 668.64"/>
              <polygon className="cls-9" points="877.53 646.89 852.69 646.89 840.27 668.41 852.69 689.92 877.53 689.92 889.95 668.41 877.53 646.89"/>
              <polygon className="cls-9" points="840.21 711.75 815.37 711.75 802.95 733.26 815.37 754.77 840.21 754.77 852.63 733.26 840.21 711.75"/>
              <polygon className="cls-9" points="877.53 690 852.69 690 840.27 711.51 852.69 733.02 877.53 733.02 889.95 711.51 877.53 690"/>
            </g>
            <g id="T22" onClick={handleTerritoryClick}>
              <polygon className="cls-15" points="766.18 754.89 741.34 754.89 728.92 776.4 741.34 797.92 766.18 797.92 778.6 776.4 766.18 754.89"/>
              <polygon className="cls-15" points="803.06 733.28 778.22 733.28 765.8 754.79 778.22 776.3 803.06 776.3 815.48 754.79 803.06 733.28"/>
              <polygon className="cls-15" points="765.91 798.13 741.08 798.13 728.66 819.64 741.08 841.15 765.91 841.15 778.33 819.64 765.91 798.13"/>
              <polygon className="cls-15" points="803.33 776.66 778.49 776.66 766.07 798.17 778.49 819.68 803.33 819.68 815.75 798.17 803.33 776.66"/>
              <polygon className="cls-15" points="803.33 819.66 778.49 819.66 766.07 841.17 778.49 862.68 803.33 862.68 815.75 841.17 803.33 819.66"/>
              <polygon className="cls-15" points="840.21 755.05 815.37 755.05 802.95 776.56 815.37 798.07 840.21 798.07 852.63 776.56 840.21 755.05"/>
              <polygon className="cls-15" points="877.53 733.3 852.69 733.3 840.27 754.81 852.69 776.32 877.53 776.32 889.95 754.81 877.53 733.3"/>
              <polygon className="cls-15" points="840.21 798.15 815.37 798.15 802.95 819.66 815.37 841.18 840.21 841.18 852.63 819.66 840.21 798.15"/>
              <polygon className="cls-15" points="877.53 776.4 852.69 776.4 840.27 797.92 852.69 819.43 877.53 819.43 889.95 797.92 877.53 776.4"/>
              <polygon className="cls-15" points="728.59 733.64 703.75 733.64 691.33 755.15 703.75 776.66 728.59 776.66 741.01 755.15 728.59 733.64"/>
              <polygon className="cls-15" points="728.94 776.35 704.1 776.35 691.68 797.86 704.1 819.37 728.94 819.37 741.36 797.86 728.94 776.35"/>
            </g>
            <g id="T23" onClick={handleTerritoryClick}>
              <polygon className="cls-1" points="803.52 560.89 778.68 560.89 766.26 582.4 778.68 603.91 803.52 603.91 815.94 582.4 803.52 560.89"/>
              <polygon className="cls-1" points="803.35 517.83 778.51 517.83 766.09 539.34 778.51 560.85 803.35 560.85 815.77 539.34 803.35 517.83"/>
              <polygon className="cls-1" points="803.6 603.97 778.76 603.97 766.34 625.48 778.76 646.99 803.6 646.99 816.02 625.48 803.6 603.97"/>
              <polygon className="cls-1" points="803.35 474.66 778.51 474.66 766.09 496.18 778.51 517.69 803.35 517.69 815.77 496.18 803.35 474.66"/>
              <polygon className="cls-1" points="803.35 431.64 778.51 431.64 766.09 453.15 778.51 474.66 803.35 474.66 815.77 453.15 803.35 431.64"/>
              <polygon className="cls-1" points="840.51 582.49 815.67 582.49 803.25 604 815.67 625.51 840.51 625.51 852.93 604 840.51 582.49"/>
              <polygon className="cls-1" points="840.34 539.42 815.5 539.42 803.08 560.94 815.5 582.45 840.34 582.45 852.76 560.94 840.34 539.42"/>
              <polygon className="cls-1" points="840.59 625.56 815.75 625.56 803.33 647.08 815.75 668.59 840.59 668.59 853.01 647.08 840.59 625.56"/>
              <polygon className="cls-1" points="840.34 496.26 815.5 496.26 803.08 517.77 815.5 539.28 840.34 539.28 852.76 517.77 840.34 496.26"/>
              <polygon className="cls-1" points="840.34 453.24 815.5 453.24 803.08 474.75 815.5 496.26 840.34 496.26 852.76 474.75 840.34 453.24"/>
              <polygon className="cls-1" points="877.36 603.82 852.52 603.82 840.1 625.33 852.52 646.84 877.36 646.84 889.78 625.33 877.36 603.82"/>
              <polygon className="cls-1" points="877.19 560.76 852.35 560.76 839.93 582.27 852.35 603.78 877.19 603.78 889.61 582.27 877.19 560.76"/>
              <polygon className="cls-1" points="877.19 517.59 852.35 517.59 839.93 539.11 852.35 560.62 877.19 560.62 889.61 539.11 877.19 517.59"/>
              <polygon className="cls-1" points="877.19 474.57 852.35 474.57 839.93 496.08 852.35 517.59 877.19 517.59 889.61 496.08 877.19 474.57"/>
              <polygon className="cls-1" points="913.92 539.1 889.08 539.1 876.66 560.61 889.08 582.12 913.92 582.12 926.34 560.61 913.92 539.1"/>
              <polygon className="cls-1" points="913.75 496.04 888.91 496.04 876.49 517.55 888.91 539.06 913.75 539.06 926.17 517.55 913.75 496.04"/>
              <polygon className="cls-1" points="913.99 582.18 889.16 582.18 876.74 603.69 889.16 625.2 913.99 625.2 926.41 603.69 913.99 582.18"/>
            </g>
            <g id="F18">
              <circle id="card-18" data-name="card" className="cls-27" cx="552.71" cy="578.94" r="21.5"/>
              <text id="index-18" data-name="index" className="cls-43" transform="translate(537.48 587.74)"><tspan className="cls-40" x="0" y="0">{diceTerritoryNumbers[17]}</tspan></text>
            </g>
            <g id="F19">
              <circle id="card-19" data-name="card" className="cls-19" cx="665.71" cy="507.94" r="21.5"/>
              <text id="index-19" data-name="index" className="cls-43" transform="translate(651.65 516.74)"><tspan x="0" y="0">{diceTerritoryNumbers[18]}</tspan></text>
            </g>
            <g id="F20">
              <circle id="card-20" data-name="card" className="cls-21" cx="666.71" cy="607.94" r="21.5"/>
              <text id="index-20" data-name="index" className="cls-43" transform="translate(652.22 616.64)"><tspan x="0" y="0">{diceTerritoryNumbers[19]}</tspan></text>
            </g>
            <g id="F21">
              <circle id="card-21" data-name="card" className="cls-33" cx="790.71" cy="697.94" r="21.5"/>
              <text id="index-21" data-name="index" className="cls-43" transform="translate(776.22 705.88)"><tspan className="cls-39" x="0" y="0">{diceTerritoryNumbers[20]}</tspan></text>
            </g>
            <g id="F22">
              <circle id="card-22" data-name="card" className="cls-26" cx="793.71" cy="790.94" r="21.5"/>
              <text id="index-22" data-name="index" className="cls-43" transform="translate(779.09 799.52)"><tspan x="0" y="0">{diceTerritoryNumbers[21]}</tspan></text>
            </g>
            <g id="F23">
              <circle id="card-23" data-name="card" className="cls-14" cx="842.71" cy="561.94" r="21.5"/>
              <text id="index-23" data-name="index" className="cls-43" transform="translate(827.33 570.88)"><tspan x="0" y="0">{diceTerritoryNumbers[22]}</tspan></text>
            </g>
          </g>
          <g id="E">
            <g id="T24" onClick={handleTerritoryClick}>
              <polygon className="cls-3" points="1048.07 471.62 1023.23 471.62 1010.81 493.13 1023.23 514.64 1048.07 514.64 1060.49 493.13 1048.07 471.62"/>
              <polygon className="cls-3" points="1048.07 514.64 1023.23 514.64 1010.81 536.15 1023.23 557.67 1048.07 557.67 1060.49 536.15 1048.07 514.64"/>
              <polygon className="cls-3" points="1010.69 493.13 985.85 493.13 973.43 514.64 985.85 536.15 1010.69 536.15 1023.11 514.64 1010.69 493.13"/>
              <polygon className="cls-3" points="1048.07 557.67 1023.23 557.67 1010.81 579.18 1023.23 600.69 1048.07 600.69 1060.49 579.18 1048.07 557.67"/>
              <polygon className="cls-3" points="1048.07 600.69 1023.23 600.69 1010.81 622.2 1023.23 643.71 1048.07 643.71 1060.49 622.2 1048.07 600.69"/>
              <polygon className="cls-3" points="1010.69 579.18 985.85 579.18 973.43 600.69 985.85 622.2 1010.69 622.2 1023.11 600.69 1010.69 579.18"/>
              <polygon className="cls-3" points="1010.69 536.15 985.85 536.15 973.43 557.67 985.85 579.18 1010.69 579.18 1023.11 557.67 1010.69 536.15"/>
              <polygon className="cls-3" points="1085.29 493.13 1060.45 493.13 1048.03 514.64 1060.45 536.15 1085.29 536.15 1097.71 514.64 1085.29 493.13"/>
              <polygon className="cls-3" points="1085.29 579.18 1060.45 579.18 1048.03 600.69 1060.45 622.2 1085.29 622.2 1097.71 600.69 1085.29 579.18"/>
              <polygon className="cls-3" points="1085.29 536.15 1060.45 536.15 1048.03 557.67 1060.45 579.18 1085.29 579.18 1097.71 557.67 1085.29 536.15"/>
            </g>
            <g id="T25" onClick={handleTerritoryClick}>
              <polygon className="cls-9" points="1085.29 683.64 1060.45 683.64 1048.03 705.15 1060.45 726.66 1085.29 726.66 1097.71 705.15 1085.29 683.64"/>
              <polygon className="cls-9" points="1085.29 726.66 1060.45 726.66 1048.03 748.17 1060.45 769.68 1085.29 769.68 1097.71 748.17 1085.29 726.66"/>
              <polygon className="cls-9" points="1085.29 769.68 1060.45 769.68 1048.03 791.19 1060.45 812.71 1085.29 812.71 1097.71 791.19 1085.29 769.68"/>
              <polygon className="cls-9" points="1122.52 662.12 1097.68 662.12 1085.26 683.64 1097.68 705.15 1122.52 705.15 1134.94 683.64 1122.52 662.12"/>
              <polygon className="cls-9" points="1122.52 705.15 1097.68 705.15 1085.26 726.66 1097.68 748.17 1122.52 748.17 1134.94 726.66 1122.52 705.15"/>
              <polygon className="cls-9" points="1122.52 748.17 1097.68 748.17 1085.26 769.68 1097.68 791.19 1122.52 791.19 1134.94 769.68 1122.52 748.17"/>
              <polygon className="cls-9" points="1159.75 640.61 1134.91 640.61 1122.49 662.12 1134.91 683.64 1159.75 683.64 1172.17 662.12 1159.75 640.61"/>
              <polygon className="cls-9" points="1159.75 683.64 1134.91 683.64 1122.49 705.15 1134.91 726.66 1159.75 726.66 1172.17 705.15 1159.75 683.64"/>
              <polygon className="cls-9" points="1159.75 726.66 1134.91 726.66 1122.49 748.17 1134.91 769.68 1159.75 769.68 1172.17 748.17 1159.75 726.66"/>
              <polygon className="cls-9" points="1197.21 619.1 1172.37 619.1 1159.95 640.61 1172.37 662.12 1197.21 662.12 1209.63 640.61 1197.21 619.1"/>
              <polygon className="cls-9" points="1197.21 662.12 1172.37 662.12 1159.95 683.64 1172.37 705.15 1197.21 705.15 1209.63 683.64 1197.21 662.12"/>
              <polygon className="cls-9" points="1197.21 705.15 1172.37 705.15 1159.95 726.66 1172.37 748.17 1197.21 748.17 1209.63 726.66 1197.21 705.15"/>
              <polygon className="cls-9" points="1234.21 597.59 1209.37 597.59 1196.95 619.1 1209.37 640.61 1234.21 640.61 1246.63 619.1 1234.21 597.59"/>
              <polygon className="cls-9" points="1234.21 640.61 1209.37 640.61 1196.95 662.12 1209.37 683.64 1234.21 683.64 1246.63 662.12 1234.21 640.61"/>
              <polygon className="cls-9" points="1234.21 683.64 1209.37 683.64 1196.95 705.15 1209.37 726.66 1234.21 726.66 1246.63 705.15 1234.21 683.64"/>
              <polygon className="cls-9" points="1197.21 748.17 1172.37 748.17 1159.95 769.68 1172.37 791.19 1197.21 791.19 1209.63 769.68 1197.21 748.17"/>
              <polygon className="cls-9" points="1234.21 726.66 1209.37 726.66 1196.95 748.17 1209.37 769.68 1234.21 769.68 1246.63 748.17 1234.21 726.66"/>
              <polygon className="cls-9" points="1271.44 619.1 1246.6 619.1 1234.18 640.61 1246.6 662.12 1271.44 662.12 1283.86 640.61 1271.44 619.1"/>
              <polygon className="cls-9" points="1271.44 662.12 1246.6 662.12 1234.18 683.64 1246.6 705.15 1271.44 705.15 1283.86 683.64 1271.44 662.12"/>
              <polygon className="cls-9" points="1271.44 705.15 1246.6 705.15 1234.18 726.66 1246.6 748.17 1271.44 748.17 1283.86 726.66 1271.44 705.15"/>
            </g>
            <g id="F24">
              <circle id="card-24" data-name="card" className="cls-35" cx="1035.71" cy="557.94" r="21.5"/>
              <text id="index-24" data-name="index" className="cls-43" transform="translate(1020.64 566.78)"><tspan className="cls-41" x="0" y="0">{diceTerritoryNumbers[23]}</tspan></text>
            </g>
            <g id="F25">
              <circle id="card-25" data-name="card" className="cls-10" cx="1171.71" cy="709.94" r="21.5"/>
              <text id="index-25" data-name="index" className="cls-43" transform="translate(1156.26 718.46)"><tspan x="0" y="0">{diceTerritoryNumbers[24]}</tspan></text>
            </g>
          </g>
        </svg>
      </div>
    );
    }
}

export default Map;
