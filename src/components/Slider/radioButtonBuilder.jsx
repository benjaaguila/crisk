import './Buttons.css'
import RadioButton from './RadioButton'

export default function radioButtonBuilder({i}) {
    const buttons = []
    for (let j = 0; j < i; j++) {
        buttons.push(<RadioButton id={j}/>)
    }
    return (
        <div className="radio-input">
            <div id='elemento-retornado'>

            </div>
            {buttons}
        </div>
    )
}