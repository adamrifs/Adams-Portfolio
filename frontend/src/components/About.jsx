import React from 'react'
import '../css/About.css'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='about-main-container'>
            <div className="about-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <motion.h4
                    className="beautiful-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span className="highlight">A</span>BOUT ME
                </motion.h4>
                <motion.div 
                    className="head-underline"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
            </div>
            <div className="about-right">
                <motion.div className="first"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1> I’m Adam Rifsal</h1>
                </motion.div>

                <motion.div className="second"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1>a BCA grad turned MERN stack developer</h1>
                </motion.div>

                <motion.div className="third"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1> obsessed with building sleek, high-performing web apps .</h1>
                </motion.div>
                <motion.div className="fourth"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1> I blend clean code </h1>
                </motion.div>
                <motion.div className="fifth"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1>with creative design to bring ideas to life.</h1>
                </motion.div>
                <motion.div className="sixth"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1>As a freelancer,</h1>
                </motion.div>
                <motion.div className="seventh"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1>I’ve helped brands grow through powerful digital solutions.</h1>
                </motion.div>
            </div>
        </div>
    )
}

export default About