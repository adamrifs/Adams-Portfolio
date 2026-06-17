import React from 'react'
import '../css/Footer.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { PiCopyrightLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const emailaddress = 'adamrifsal@gmail.com';

    function gotomail(email){
        var gmailurl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURI(email);
        window.open(gmailurl,'_blank')
    }

    return (
        <footer className='footer-container'>
            <div className="footer-top-fade"></div>
            <div className="footer-glow"></div>
            
            <div className="footer-content">
                <div className="footer-brand">
                    <h1 className="brand-logo">
                        <span className="brand-letter">A</span>dam
                    </h1>
                    <p className="brand-subtitle">Crafting digital experiences.</p>
                </div>

                <div className="footer-connect">
                    <h3 className="connect-title">Let's Connect</h3>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaFacebook /></a>
                        <a href="https://linkedin.com/in/adam-rifsal-a88ab1243" target='_blank' rel='noreferrer' className="social-icon"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/_adam.rifs_/" target='_blank' rel='noreferrer' className="social-icon"><IoLogoInstagram /></a>
                        <a href="#" className="social-icon"><FaXTwitter /></a>
                    </div>
                    <div className="email-contact" onClick={() => gotomail(emailaddress)}>
                        <MdEmail className="email-icon" />
                        <span className="email-text">{emailaddress}</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-divider"></div>
                <div className="copyright">
                    <PiCopyrightLight className="copy-icon" /> {new Date().getFullYear()} Developed by <span className="highlight-name">Adam</span>. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer