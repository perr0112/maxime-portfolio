import './Contact.scss'

import React from 'react'
import img from '../../assets/img/contact/pdp.png'

function Contact() {
  return (
    <>
        <div className='contact'>

            <div className="contact-titles">
                <h1>Me contacter</h1>
                <img src={img} alt='profile-img' />
            </div>

            <div className="buttons-contact">
                <div>
                    <a href="https://wa.me/+33 6 46 07 46 16?text=Hey%20Maxime" target='_blank' rel='noreferrer' className="btn btn-whatsapp full-w">WhatsApp</a>
                    <a href="https://twitter.com/Izuki78" target='_blank' rel='noreferrer' className="btn btn-twitter full-w">Twitter</a>
                </div>
                <div>
                    <a href="https://www.instagram.com/maxime.designer_/" target='_blank' rel='noreferrer' className="btn btn-instagram full-w">Instagram</a>
                    <a href="#" className="btn btn-primary full-w" target='_blank' rel='noreferrer'>Mail</a>
                </div>
                <div>
                    <a href="#" className="btn btn-primary full-w" target='_blank' rel='noreferrer'>Télécharger mon CV</a>
                    <a href="#" className="btn btn-primary full-w" target='_blank' rel='noreferrer'>BOOK</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;
