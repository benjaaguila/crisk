import './Slide.css'
import Caballeria from '../../../public/assets/Caballeria4.png'
import Artilleria from '../../../public/assets/Artilleria.png'
import Infanteria from '../../../public/assets/Infanteria.png'
import Objetivo from '../../../public/assets/Objetivo.png'
import Compra from '../../../public/assets/Compra.png'
import Cube from './Cube'
import Hexagon2 from '../Hexagon/Hexagon2'

export default function Slide({id}) {
    const slides = {
        0 : {title: 'Objetivo', 
                srcType: "img",path: Objetivo,
                body: `El objetivo del juego es conquistar todos los territorios del mapa, para lo 
                cual los jugadores deben adquirir piezas de combate y conquistar territorios. Cada 
                territorio tiene un valor de poder que corresponde a la cantidad de piezas de combate 
                que se necesitan para conquistarlo. Además, los jugadores reciben refuerzos según la 
                cantidad de territorios que tengan y los continentes que hayan conquistado. Durante el 
                turno, los jugadores pueden obtener recursos y declarar la guerra a territorios enemigos 
                en la fase de combate, donde deberán lanzar dados y comparar resultados para retirar batallones 
                del jugador perdedor. El jugador que conquiste todos los territorios del mapa, gana el juego.`},
        1: {title: 'Fase de Prepación',
                srcType: "component",path: "",
                body: `La fase de preparación del juego consiste en asignar un número aleatorio a cada 
                territorio y colocar al menos un batallón por territorio hasta que todos los territorios 
                tengan al menos un batallón. Luego, uno a uno los jugadores tienen la posibilidad de reforzar 
                sus territorios con más batallones hasta que estos se agoten. Después, cada jugador debe dividir 
                la cantidad de territorios que tiene entre 3, ese será el número de refuerzos que recibirá, mientras 
                que quienes tengan un continente entero deben revisar cuántos refuerzos extra les entrega según el continente. 
                Además, los jugadores reciben refuerzos adicionales al ganar cartas de territorio que se obtienen al conquistar 
                territorios enemigos.`},
        2 : {title: 'Fase Ataque',
                srcType: "component",path: <Cube/>,
                body: `En la fase del ataque cada jugador debe tirar el dado por cada pieza que tenga en el 
                territorio. El jugador que obtenga el número más bajo pierde una pieza. En caso de empate, 
                el territorio se queda en manos del jugador que lo conquistó.`},
        3: {title: 'Fase de Compra',
            srcType: "img",path: Compra,
            body: `Durante esta fase, los jugadores pueden mover tropas de un territorio a otro, siempre
                y cuando estén conectados. También pueden comprar tropas con los recursos obtenidos en la 
                primera fase del turno. El número de tropas que un jugador puede comprar está determinado por 
                el número de territorios que posee, dividido por tres, más cualquier refuerzo adicional por poseer 
                un continente completo o por ganar una carta de territorio. Los jugadores pueden comprar tanto infantería 
                como caballería o artillería, cada una con su propio poder de ataque y cantidad de batallones. Después de 
                esta fase, el turno pasa al siguiente jugador en sentido horario.`},
        4 : {title: 'Territorio disponible',
                srcType: "component",path: <Hexagon2 type={2}/>,
                body: `Los territorios sin grilla corresponden a territorios disponibles para conquistar`},
        5 : {title: 'Territorio conquistado',
        srcType: "component",path: <Hexagon2 type={1}/>,
        body: `A medida que conquistes territorios, estos se presentaran con una grilla de color azul.`},
        6 : {title: 'Territorio enemigo',
                srcType: "component",path: <Hexagon2 type={3}/>,
                body: `Mientras que los territorios con grilla negra corresponden a terriotrios conquistados por tus enemigos`},
        7 : {title: 'Infanteria', 
        srcType: "img",path: Infanteria,
        body: `Pieza de combate que equivale a 1 de poder. Se puede adquirir en la tienda por
            1 de hierro y 2 de tela`},
        8 : {title: 'Caballeria',
            srcType: "img", path: Caballeria,
            body: `Pieza de combate que equivale a 2 de poder. Se puede adquirir en la tienda por 2 de 
            hierro y 2 de cuero`},
        9 : {title: 'Artilleria',
                srcType: "img",path: Artilleria,
                body: `Pieza de combate que equivale a 3 de poder. Se puede adquirir en la tienda por 3 
                de hierro y 3 de madera`},

};
    function sourceBuilder(id) {
        if (slides[id].srcType === "img") {
            return <img src={slides[id].path} className="img" alt="piece"/>;
        }
        else if(slides[id].srcType === "component") {
            return slides[id].path;
        }
        else {
            return null;
        }
        
    }
    return (
        <div className='card-game'>
            <div className="backcard">
                <div className="card-image">
                    {sourceBuilder(id)}
                </div>
                <div className="card-description">
                    {<p className="text-title">{slides[id].title}</p>}
                    <p className="text-body">{slides[id].body}</p>
                </div>
            </div> 
        </div>
        
        
    )
}