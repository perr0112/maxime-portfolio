import './About.scss';

import profil from '../../assets/img/profil.png';
import banner from '../../assets/img/qui-suis-je.png';

import React from 'react';

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
            <img src={profil} alt='profil' />
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
                    <div className="card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil minima accusantium cumque error quasi. Laboriosam similique eveniet voluptas in autem quis exercitationem impedit ratione unde, minus deleniti amet praesentium?
                    </div>
                    <div className="card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil minima accusantium cumque error quasi. Laboriosam similique eveniet voluptas in autem quis exercitationem impedit ratione unde, minus deleniti amet praesentium?
                    </div>
                    <div className="card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil minima accusantium cumque error quasi. Laboriosam similique eveniet voluptas in autem quis exercitationem impedit ratione unde, minus deleniti amet praesentium?
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
