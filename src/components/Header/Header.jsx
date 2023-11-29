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
                    <a href={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</a>
                </li>
                <li>
                    <a href={`${process.env.PUBLIC_URL}/services`}>Services</a>
                </li>
                <li>
                    <a href={`${process.env.PUBLIC_URL}/contact`}>Contact</a>
                </li>
            </ul>
            <button className="btn btn-primary">Menu</button>
        </div>
    </div>
  )
}
