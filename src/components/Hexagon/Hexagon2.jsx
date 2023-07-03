import './Hexagon2.css'

export default function Hexagon2({type}){
    // type 1 = Rallado
    // type 2 = Lleno
    // type 3 = Bloqueado

    if (type === 1) {
        var clase = "hexagon-grilled"
    } else if (type === 2) {
        var clase = "hexagon"
    } else if (type === 3) {
        var clase = "hexagon-blocked"
    }

    return (
        <div className='background'>
            <div className={clase} id='hexagon'>
            </div>
        </div>
    )
}