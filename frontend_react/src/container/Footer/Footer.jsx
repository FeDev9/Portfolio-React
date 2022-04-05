import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }


    return (
        <>
            <h2 className="head-text">Chat with <span>me!</span></h2>


            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:federicocecconi9@hotmail.it" className='p-text'>federicocecconi9@hotmail.it</a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="https://telegram.me/FeDev9" className='p-text'>Telegram Chat</a>
                </div>
            </div>

            {!isFormSubmitted ?

                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} className="p-text" name='name' />
                    </div>
                    <div className="app__flex">
                        <input type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} className="p-text" name='email' />
                    </div>

                    <div>
                        <textarea className='p-text'
                            name="message"
                            value={message}
                            placeholder="Your Message"
                            onChange={handleChangeInput} />

                    </div>
                    <button className="p-text" type='button' onClick={handleSubmit}>{loading ? 'SENDING' : 'Send'}</button>
                </div> :
                <div>
                    <h3 className="head text">Thank you</h3>
                </div>
            }
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg'
)