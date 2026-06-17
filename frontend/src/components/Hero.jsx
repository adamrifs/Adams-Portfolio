import React, { useState } from 'react'
import '../css/Hero.css'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { TiDownload } from "react-icons/ti";
import cv from '../assets/AdamCv.pdf'
const Hero = ({onContactClick}) => {

    const [buttonanim, setbuttonanim] = useState(false)
    function btnload() {
        setbuttonanim(true);

        setTimeout(() => {
            setbuttonanim(false)
        }, 2000);
    }
    return (
        <div className='hero-main-container'>
            <div className="nav">
                <h1><span>A</span>dam</h1>
                <h3 onClick={onContactClick}>CONTACT ME</h3>
            </div>
            <div className="gr1"></div>
            <div className="gr2"></div>
            <div className="grf"></div>
            <div className="gr3"></div>
            <div className="gr3f"></div>
            <div className="gr4"></div>
            <div className="gr4f"></div>
            <div className="gr5"></div>
            <div className="gr5f"></div>
            <div className="gr6"></div>
            <div className="gr7"></div>

            <motion.div className="name"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}>
                <h1>ADAM <span>RIFSAL</span></h1>
            </motion.div>

            <motion.div className="quoate"
                initial={{ opacity: 0, x: -180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}>
                <p>Driven by innovation and aesthetics, I design and develop futuristic websites </p>
            </motion.div>
            <div className="cv-download">
                <a href={cv} download='adamsCV'>
                    <button onClick={btnload}>
                        <span></span><TiDownload className={buttonanim ? 'icon download' : 'icon'} /> Download CV
                    </button>
                </a>
            </div>
            <div className="get-in-touch">
                <h2>GET IN TOUCH <MdArrowOutward /></h2>
            </div>
            {/* <div className="scroll">
                <h2>SCROLL FOR MORE</h2>
            </div> */}
            <div className="technologist">
                <h2>Technologist</h2>
            </div>
        </div>
    )
}

export default Hero