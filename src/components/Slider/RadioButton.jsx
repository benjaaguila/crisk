import {useContext, useState} from 'react'
import {SlideContext} from '../../pages/RulesPage/RulesPage'

export default function RadioButton({id}){
    const {
        buttonCliked,
        setClick    
      } = useContext(SlideContext);
      
    const handleSlider = () => {
        setClick(id);
    }
    
    return (
        <label className="label" key={id}>
                        <button type="radio" name="radio" onClick={handleSlider}></button>
                        <span className="check"></span>
        </label>
    )
}