import React, { useContext, useEffect, useState } from 'react'
import '../css/Modal.css'
import { AppContext } from '../Context'

const Modal = () => {
    const { isModal, setIsModal } = useContext(AppContext)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => {
            setVisible(true)
        }, 20);
        return () => clearTimeout(t)
    }, [])

    const close = () => {
        setVisible(false)
        setTimeout(() => {
            setIsModal(false)
        }, 500);
    }

    useEffect(() => {

        const onKey = (e) => {
            if (e.key === 'Escape') close()
        }

        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [])
    const onBackdropClick = (e) => {
        if (e.target.classList.contains('modal-container')) close();
    };

    return (
        <div className={`modal-container ${visible ? 'open' : ''}`}
            onClick={onBackdropClick}
            role="dialog"
            aria-modal="true">
            <div className={`modal-box ${visible ? "show" : ''}`}>
                <h1><span>M</span>essage Sent</h1>
                <p>Thank you for reaching out. I’ll get back to you soon.</p>
            </div>
        </div>
    )
}

export default Modal