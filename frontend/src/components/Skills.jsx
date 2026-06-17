import React from 'react'
import '../css/Skills.css'
import htmlimage from '../assets/htmlimage.png'
import cssimage from '../assets/cssimage.png'
import jsimage from '../assets/jsimage.webp'
import reactimage from '../assets/reactimage.png'
import nodeimage from '../assets/nodeimage.png'
import mongoimage from '../assets/mongo.webp'
import pythonimage from '../assets/python.png'
import nextJs from '../assets/NextJs.png'
import { motion } from 'framer-motion'
import { FaBrain } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

const skillsData = [
    // { name: "HTML", img: htmlimage },
    // { name: "CSS", img: cssimage },
    // { name: "JavaScript", img: jsimage },
    { name: "AI", icon: <FaBrain style={{ color: '#0dd1f1', width: '100%', height: '100%' }} /> },
    { name: "React", img: reactimage },
    { name: "Next.js", img: nextJs },
    { name: "Node.js", img: nodeimage },
    { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178c6', width: '100%', height: '100%' }} /> },
    { name: "MongoDB", img: mongoimage },
    { name: "Python", img: pythonimage },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const Skills = () => {
    return (
        <div className='skills-main-container'>
            <div className="skills-heading" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <motion.h1
                    className="beautiful-heading"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span className="highlight">W</span>HAT I KNOW
                </motion.h1>
                <motion.div 
                    className="head-underline"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
            </div>
            
            <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skillsData.map((skill, index) => (
                    <motion.div 
                        className="skill-orb-wrapper" 
                        key={index}
                        variants={itemVariants}
                    >
                        {/* Levitating Orb */}
                        <motion.div 
                            className="skill-orb"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ 
                                duration: 3 + (index % 3), // staggered float speed
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <div className="spinning-ring"></div>
                            <div className="orb-glass">
                                {skill.img ? (
                                    <img src={skill.img} alt={skill.name} />
                                ) : (
                                    <div className="skill-icon">{skill.icon}</div>
                                )}
                            </div>
                        </motion.div>
                        
                        {/* Text Label */}
                        <div className="skill-label">{skill.name}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills