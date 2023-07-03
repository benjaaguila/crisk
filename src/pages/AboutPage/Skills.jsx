import './Skills.css'
import React from 'react'

export default function Skills({percent}){

    const texto = []

    for (const [key, value] of Object.entries(percent)){
        const skill_percent = 'skill-percent' + value.toString()[0];
        const skill_percent_num = 'skill-percent-number';

        texto.push(
            <div className="skill">
                <div className="skill-name">{key}</div>
                <div className="skill-level">
                    <div className={skill_percent}></div>
                    </div>
                <div className={skill_percent_num}>{value}</div>
            </div>
        )
    }

    return (
        <div className="card">
            <div className="header">Mis habilidades</div>
            <div className="body">
                {texto}
            </div>
        </div>
    )
}
