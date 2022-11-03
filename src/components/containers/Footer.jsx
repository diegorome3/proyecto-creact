import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='d-flex justify-content-center mt-5'>
                    <ul className='row mt-5 text-center'>
                        <h4>Contactános</h4>
                        <li><i class="fa-brands fa-whatsapp"></i> 1164166563</li>
                        <li><FontAwesomeIcon icon={faEnvelope} /> romebike@gmail.com</li>
                        <li><FontAwesomeIcon icon={faLocationDot} /> Kiernan 4979</li>
                    </ul>
                    <ul className='mt-5 text-center'>
                        <h4>Sigamos conectados</h4>
                        <li><i class="fa-brands fa-instagram">rome.bike</i></li>
                        <li><i class="fa-brands fa-facebook-f">rome bike</i></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
