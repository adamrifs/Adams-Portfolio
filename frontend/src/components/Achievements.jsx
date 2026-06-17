import React from 'react'
import '../css/Achievements.css'
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import globe from '../assets/earth.gif'
import earth from '../assets/earthvid.mp4'
import netherlands from '../assets/netherlands.gif'
import uae from '../assets/uae.gif'
import qatar from '../assets/Qatar-l.gif'
import india from '../assets/India.gif'
const Achievements = () => {
    return (
        <div className='achievements-main-container'>
            <div className="achievements-heading" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <motion.h1
                    className="beautiful-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span className="highlight">A</span>CHIEVEMENTS
                </motion.h1>
                <motion.div 
                    className="head-underline"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
            </div>
            <div className="ac-box">
                <motion.div 
                    className="ac-card glass-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="glass-glow"></div>
                    <h2>INTERNATIONAL FREELANCE WEB DEVELOPER</h2>
                    <p>Delivered high-performance web applications for clients across the Netherlands, Dubai, Qatar etc.
                        Specialized in building scalable, responsive, and visually appealing platforms tailored to business needs,
                        including real estate, investment, and service-based websites.</p>
                </motion.div>
                <motion.div 
                    className="ac-globe"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="globe-glow"></div>
                    <video src={earth} autoPlay loop muted playsInline width="100%" height="auto" />
                </motion.div>
            </div>
            
            <div className="countries-worked">
                <motion.div 
                    className="countries-heads"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2>CLIENTS FROM</h2>
                    <div className="sub-underline"></div>
                </motion.div>
                <motion.div 
                    className="countries-box"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        { name: "NETHERLANDS", img: netherlands },
                        { name: "UAE", img: uae },
                        { name: "QATAR", img: qatar },
                        { name: "INDIA", img: india }
                    ].map((country, index) => (
                        <motion.div 
                            className="countries-card modern-client-card" 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="card-border-glow"></div>
                            <h3>{country.name}</h3>
                            <div className="countries-image">
                                <img src={country.img} alt={country.name} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Achievements