import './Header.scss';

import React from 'react';

import logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <a href="/maxime-portfolio">
                <img src={logo} alt='logo' />
                <h1>Bymax</h1>
            </a>
        </div>
        <div className='navbar-menu'>
            <ul>
                <li>
                    <a href={`maxime-portfolio/portfolio`}>Portfolio</a>
                </li>
                <li>
                    <a href="/maxime-portfolio#services">Services</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
            <button className="btn btn-primary">Menu</button>
        </div>
    </div>
  )
}
