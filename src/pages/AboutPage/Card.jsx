import Rorro from '../../../public/assets/Rorro.jpeg';
import Benja from '../../../public/assets/Benja.jpg';
import './Card.css';
import Skills from './Skills';


export default function Card(){

    const skills_rorro = {'JavaScript': '50%',
                        'CSS': '60%', 
                        'HTML': '90%', 
                        'React': '10%'}

    const skills_benja = {'JavaScript': '40%',
                        'CSS': '30%', 
                        'HTML': '90%', 
                        'React': '10%'}

    return (
        <>
            <div className="img-container">
                <div className='left-image'>
                    <img src={Rorro} alt="selfimage"/>
                    <p></p>
                    <div className="info-front">
                        <h2>Rorro Ogalde</h2>
                    </div>
                    <div className="info-back">
                        <p>Ingeniero Civil en computación, mayor Software, minor Data-Science.
                            Tiene 21 años, tiene 2 años de experiencia en automatización y optimización de procesos.</p>
                    </div>
                    <div className='skills'>
                        {<Skills percent={skills_rorro}/>}
                    </div>
                </div>

                <div className='right-image'>
                    <img src={Benja} alt="selfimage"/>
                    <div className='info-front'>
                        <h2>Benja Aguila</h2>
                    </div>
                    <div className="info-back">
                        <p>21 años, Ingeniero Civil computación, mayor software, minor Data Science.</p>
                    </div>
                    <div className='skills'>
                        {<Skills percent={skills_benja}/>}
                    </div>
                </div>
            </div>
        </>
    )
}