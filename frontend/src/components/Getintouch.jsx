import React from 'react'
import '../css/Getintouch.css'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa6";

const Getintouch = () => {
  return (
    <div className='getintouch-main-container'>
      <div className="glow-background-pulse"></div>
      
      <motion.div 
        className="getintouch-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <button className="beautiful-button">
          <span className="button-content">
            GET IN TOUCH
            <FaArrowRight className="arrow-icon" />
          </span>
        </button>
      </motion.div>
    </div>
  )
}

export default Getintouch