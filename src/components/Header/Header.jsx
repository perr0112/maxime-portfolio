import './Header.scss';

import React from 'react';

import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export default function Header({ selected }) {
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
                <li className={selected === "portfolio" ? 'selected' : ''}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={selected === "services" ? 'selected' : ''}>
                    <Link to="/services">Services</Link>
                </li>
                <li className={selected === "contact" ? 'selected' : ''}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="elipse"></div>
    </div>
  )
}
