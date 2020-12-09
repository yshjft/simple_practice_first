import React from 'react'
import styles from './Modal.scss'

const Modal = ()=>{
    return(
        <>
            <div className={`${styles.modalArea}`}/>
            <div className={`${styles.modal}`}>
                <div className={`${styles.info}`}>header</div>
                <div className={`${styles.info}`}>pitcure</div>
                <div className={`${styles.info}`}>name</div>
                <div className={`${styles.info}`}>address</div>
            </div>
        </>
    )
}

export default Modal