// Codigo sacado de https://codepen.io/MattH22/pen/LYYwpN
import './rules.css';
import Slider from '../../components/Slider/Slider';
import Buttons from '../../components/Slider/radioButtonBuilder';
import Hexagon2 from '../../components/Hexagon/Hexagon2';
import React, {createContext, useState, useEffect} from "react";

export const SlideContext = createContext(null);

export default function RulesPage() {
  const [buttonCliked, setClick] = useState(0);
  return (
    <SlideContext.Provider value={{buttonCliked, setClick}}>
        <div className='rules-content'>
          <div className="rules">
            <h1>Reglas</h1>
          </div>
          <div id='retornar'>

          </div>
          <div className='diapos'>
            <Slider index={buttonCliked}/>
          </div>
          <Buttons i={10}/>
        </div>
        
        
    </SlideContext.Provider>
  );
}