import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className="container-contact">
            <h1>Contactez-nous</h1>
            <p>Par mail : Cordrink@gmail.com</p>
            <p>Par telephone : +237 6XX-XX-XX-XX</p>
            <p>Rejoignez-nous sur les reseaux : </p>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        </div>
    );
}

export default Contact;