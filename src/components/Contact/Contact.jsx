import './Contact.scss'

import React from 'react'
import img from '../../assets/img/contact/pdp.png'

export default function Contact() {
  return (
    <div className='contact'>

        <div className="contact-titles">
            <h1>Me contacter</h1>
            <img src={img} alt='profile-img' />
        </div>

        <div className="buttons-contact">
            <div>
                <button className="btn btn-whatsapp full-w">WhatsApp</button>
                <button className="btn btn-twitter full-w">Twitter</button>
            </div>
            <div>
                <button className="btn btn-instagram full-w">Instagram</button>
                <button className="btn btn-primary full-w">Mail</button>
            </div>
            <div>
                <button className="btn btn-primary full-w">Télécharger mon CV</button>
                <button className="btn btn-primary full-w">BOOK</button>
            </div>
        </div>
    </div>
  )
}
