import React from 'react';
import BSForm from './ContactForm';


const ContactMe = ({ contact }) => {
        return (
            <div>
                <h4> <i class="far fa-address-card" style={{ color: 'white' }}></i>Contact Me </h4>
                <div>
                    <BSForm />
                </div>
            </div>
        )
    }

export default ContactMe;