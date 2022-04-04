import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/FeDev9"><BsGithub /></a>

            </div>
            <div>
                <a href="https://www.instagram.com/fedcecco"><BsInstagram /></a>

            </div>
            <div>
                <a href="https://www.linkedin.com/in/federicocecconi/"> <FaLinkedinIn /></a>

            </div>
        </div>
    )
}

export default SocialMedia