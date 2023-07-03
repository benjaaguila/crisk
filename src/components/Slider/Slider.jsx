import Hexagon from "../Hexagon/Hexagon"
import "./Slider.css"
import Buttons from "./radioButtonBuilder"
import Slide from "../Slide/Slide"
import Cube from "../Slide/Cube"

export default function Slider({index}) {
    const slides = []

    // slides.push()

    if (index <= 10) {
        slides.push(
            <Slide id={index}/>
        )
    } 
    // else if (index === 4) {
    //     slides.push(
    //         <Cube/>
    //     )
    // }

    
    return (
        <>
            <div className="slider">
                <div className="slides">
                    {slides}
                </div>
            </div>
        </>
    )
}