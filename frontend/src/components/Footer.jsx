import React from 'react'
import '../css/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
    const emailaddress = 'adamrifsal@gmail.com';

    function gotomail(email){
        var gmailurl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURI(email);
        window.open(gmailurl,'_blank')
    }
    return (
            <div className='footer'>
                <div className="ft-content">

                    <div className="ft-left">
                        <h1><span>A</span>dam</h1>
                    </div>

                    <div className="ft-right">
                        <div className="ft-gt-head">
                            Get in touch.
                        </div>
                        <div className="icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="https://linkedin.com/in/adam-rifsal-a88ab1243" target='_blank'><FaLinkedin /></a>
                            <a href="https://www.instagram.com/_adam.rifs_/" target='_blank'><IoLogoInstagram /></a>
                            <a href="#"><FaXTwitter /></a>
                        </div>
                        <div className="email-head">
                            <p onClick={() => gotomail(emailaddress)}>{emailaddress}</p>
                        </div>
                    </div>

                </div>
                <div className="cp-ft">
                    <h2><PiCopyrightLight /> 2022 Developed by <span>Adam</span></h2>
                </div>
            </div>
    )
}

export default Footer