// Codigo sacado de https://codepen.io/MattH22/pen/LYYwpN
import { useEffect } from 'react';
import Hexagon from '../../components/Hexagon/Hexagon';
import axios from 'axios';
import Map from '../Map/Map';
import GameBar from '../GameBar/GameBar';
import './board.css';

export default function Board() {

  return (
    <div className="board">
        <Map/>
        <GameBar/>
    </div>
  );
}