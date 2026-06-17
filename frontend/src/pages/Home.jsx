import React, { useRef } from 'react'
import '../css/Home.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Getintouch from '../components/Getintouch'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    const contactRef = useRef(null)

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='Home-main-container'>
            <Hero onContactClick={scrollToContact} />
            <About />
            <Projects />
            <Achievements />
            <Skills />
            <Getintouch />
            <Contact refProp={contactRef}/>
            <Footer/>
        </div>
    )
}

export default Home