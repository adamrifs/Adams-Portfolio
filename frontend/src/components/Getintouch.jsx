import React from 'react'
import '../css/Getintouch.css'
import { motion } from 'framer-motion'

const Getintouch = () => {
  return (
    <div className='getintouch-main-container'>
      <motion.div className="getintouch-box"
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}>
        <h1>GET IN TOUCH</h1>
      </motion.div>
    </div>
  )
}

export default Getintouch