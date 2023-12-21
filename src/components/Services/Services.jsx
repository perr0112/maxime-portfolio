import './Services.scss'

import React from 'react'

import { dataServices } from '../data/services'
import transition from '../data/transition'

function Card({ infos }) {
    return (
        <div className={`card ${infos.top ? 'top' : ''}`}>
            <div className="card-header">
                <h3>{infos.name}</h3>
                <span>{infos.alias}</span>
            </div>
            <div className="card-body">
                <ul>
                    {infos.features.map((feature, index) => (
                        <div className='feature'>
                            <img src={feature.avalaible ?
                            process.env.PUBLIC_URL + '/assets/services/v.png'
                            :
                            process.env.PUBLIC_URL + '/assets/services/x.png'} alt='img' /><li className={`${feature.avalaible ? 'avalaible' : 'not-avalaible'}`} key={index}>
                            {feature.value}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="card-footer">
                <div className="infos-price">
                    <p><span id="price">{infos.price}</span>/unité</p>
                    <span id="info">Le prix peut varier en fonction de la demande</span>
                </div>
                <button className="btn btn-third">Contacter</button>
            </div>
        </div>
    )
}

function Services() {
  return (
    <div className='services'>
        <div className="infos-services">
            <h1>Mes services</h1>
            <p>Miniatures</p>
        </div>
        <div className="cards-price">
            {dataServices.map((service, index) => (
                <Card key={index} infos={service} />
            ))}
        </div>
        <button className="btn btn-primary services-btn">Autre demande</button>
    </div>
  )
}

export default transition(Services);
