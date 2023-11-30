import './Header.scss';

import React from 'react';

import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

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
                    <Link to="/portfolio">Portf</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/services">Contact</Link>
                </li>
            </ul>
            <button className="btn btn-primary">Menu</button>
        </div>
        <div className="elipse"></div>
    </div>
  )
}
