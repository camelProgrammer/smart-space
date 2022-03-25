import React from 'react';
import './_contact.scss';

const Contact = () => {
    return (
        <div className='contact' id='Contact'>
            <h2 className='contact-heading'>Get Our Newsletter</h2>

            <p className='contact-text'>To join the worldwide community</p>

            <div className='contact-email'>
                <input
                    className='contact-email__input'
                    type='email'
                    pattern='.+@globex\.com'
                    placeholder='Type your Email Address'
                ></input>

                <button className='contact-email__btn' type='submit'>
                    Send Now
                </button>
            </div>
        </div>
    );
};

export default Contact;
