import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import '../css/Contact.css'
import emailjs from "emailjs-com";
import Modal from './Modal';
import { AppContext } from '../Context';

const Contact = ({ refProp }) => {
    const { isModal, setIsModal } = useContext(AppContext)

    //===================== email sending =======================
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_y5x0aye",
            "template_6w7qcuf",
            e.target,
            "K9CvnWo2PK5zr49-u"
        )
            .then(() => {
                setIsModal(true)
                e.target.reset()
            })
            .catch(() => {
                alert('something went wrong')
            })
    }
    const mesheadref = useRef(null)
    const [mesheadvisible, setmesheadvisible] = useState(false)
    useEffect(() => {
        function mesheadfun() {
            if (!mesheadref.current) return;
            const mesheadtop = mesheadref.current.getBoundingClientRect().top
            const windowheight = window.innerHeight
            if (mesheadtop < windowheight / 1) {
                setmesheadvisible(true)
                window.removeEventListener('scroll', mesheadfun)
            }
        }

        window.addEventListener('scroll', mesheadfun)

        return () => {
            window.removeEventListener('scroll', mesheadfun)
        }
    }, [])

    const [arrowvis, setarrowvis] = useState(false)
    const arrowref = useRef(null)
    useEffect(() => {
        const arrowElement = arrowref.current;
        function arrowfun(event) {
            if (event.type === 'mouseenter') {
                setarrowvis(true)
            } else if (event.type === 'mouseleave') {
                setarrowvis(false)
            }
        }
        if (arrowElement) {
            arrowElement.addEventListener('mouseenter', arrowfun)
            arrowElement.addEventListener('mouseleave', arrowfun)
        }

        return () => {
            if (arrowElement) {
                arrowElement.removeEventListener('mouseenter', arrowfun)
                arrowElement.removeEventListener('mouseleave', arrowfun)
            }
        }
    }, [])

    const [msgvis, setmsgvis] = useState(false)
    const contactref = useRef(null)

    function msgopen() {
        const formstyle = window.getComputedStyle(contactref.current)
        if (formstyle.visibility === 'hidden' &&
            formstyle.opacity === '0') {
            setmsgvis(true)
        } else if (formstyle.visibility === 'visible' &&
            formstyle.opacity === '1') {
            setmsgvis(false)
        }
    }

    return (
        <div className='contact-main-container' ref={refProp}>
            <div className="contact-f-h-box">
                <div ref={mesheadref} className={`c-f-h-box ${mesheadvisible ? 'cfh-fade' : ''}`}>
                    <h1><span>D</span>rop Me a Message.</h1>
                    <div ref={arrowref} className="arrow-icon">{arrowvis ? <FaArrowAltCircleRight /> : <FaRegArrowAltCircleRight />}</div>
                </div>
                <form onSubmit={sendEmail} >
                    <div ref={contactref} className={'contact-form '}>
                        <div className="input-fields">
                            <input type='text' id='name' name='name' required />
                            <label for='name'>Name</label>
                        </div>
                        <div className="input-fields">
                            <input type='email' id='email' name='email' required />
                            <label for='email'>Email</label>
                        </div>
                        <div className="input-fields">
                            <textarea id='message' className='textarea' name='message' required cols='40' rows='3'></textarea>
                            <label for='message'>Message</label>
                        </div>
                        <div className="submit-btn">
                            <button><IoIosSend /> Send</button>
                        </div>
                    </div>
                </form>
                {
                    isModal && (
                        <Modal />
                    )
                }
            </div>
        </div>
    )
}

export default Contact