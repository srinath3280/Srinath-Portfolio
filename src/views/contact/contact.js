import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <div className='contact-content'>
                <div class="contact-content-address">
                    <div>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <h1>ADDRESS</h1>
                    <p>Kurnool, Andhra Pradesh, India</p>
                </div>
                <div class="contact-content-contact">
                    <div>
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <h1>CONTACT NUMBER</h1>
                    <p>+91 9642031606</p>
                </div>
                <div class="contact-content-email">
                    <div>
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    <h1>EMAIL ADDRESS</h1>
                    <p>lingadahallisrinath06@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
