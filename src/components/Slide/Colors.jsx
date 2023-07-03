import './Colors.css'

export default function Color() {

    const ChangeColor = (index) => {
        if (index === 0) {
            var color = "red";
        } else if (index === 1) {
            var color = "blue";
        } else if (index === 2) {
            var color = "green";
        }
        console.log(index)
        // document.getElementsByClassName("card-image").style.color = color;
    }


    const html = []
    const colors = ['Rojo', 'Verde', 'Azul', 'Amarillo']
    for (let i = 0; i < colors.length; i++) {
        html.push(<label>
                        <button type="radio"></button>
                        <span>{colors[i]}</span>
                    </label>)
    }
    return (
        <div className='color-options'>
            <div className="container">
                <form>
                    {html}
                </form>
            </div>
        </div>

    )
            
}


