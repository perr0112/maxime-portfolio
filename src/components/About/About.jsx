import './About.scss';

import profil from '../../assets/img/profil.png';
import banner from '../../assets/img/qui-suis-je.png';

import { dataTestimonials } from '../data/testimonials';

import React from 'react';

function Card({ infos }) {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3>{infos.name}</h3>
                <p>{infos.title} - {infos.company}</p>
            </div>
            <div className='card-body'>
                <p>{infos.content}</p>
            </div>
        </div>
    )
}

export default function About() {
  return (
    <div className='about'>
        <div className='main-infos'>
            <div className='titles'>
                <h1>Bymax,
                    <br />
                    Graphic designer.
                </h1>
                <p>
                    Créateur passionné, je donne vie à des réalisations uniques.
                </p>
            </div>
            <div className='img-container'>
                <img src={profil} alt='profil' />
                <div className="elipse"></div>
            </div>
        </div>
        <div className='following-infos'>
            <p>À propos</p>
            <img src={banner} alt='banner' />
            <div className="buttons">
                <button className="btn btn-primary">Voir mon portfolio</button>
                <button className="btn btn-secondary">Behance</button>
            </div>
            <div className='testimonials'>
                <p>Quelle a été leur impression ?</p>
                <div className="cards">
                    {dataTestimonials.map((testimonial, index) => (
                        <Card infos={testimonial} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
