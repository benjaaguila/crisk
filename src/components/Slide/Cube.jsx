import './Cube.css'

export default function Cube() {
    const style = []
    for (let i = 0; i < 5; i++) {
        var ide = 'i' + i;
        style.push(
            <span className="cube-span" id={ide} key={i}>{i+1}</span>
        )
    }
    return(
        <div className="cube-loader">
            <div className="cube-top">6</div>
            <div className="cube-wrapper">
                {style}
            </div>
        </div>
    )
}