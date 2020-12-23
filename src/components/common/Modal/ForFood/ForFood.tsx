import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../Modal.scss'

const ForFood = () =>{
    return (
        <div className={`${styles.contentArea}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.imgArea}`}>
                    <div className={`${styles.noImg}`}>NO IMAGE</div>
                    {/* <img src={image} className={`${styles.Img}`}></img> */}
                </div>
                <div className={`${styles.infoArea}`}>
                    <div>name</div>
                    <div>address</div>
                    <div>menu</div>
                    <div>score</div>
                </div>
            </div>
        </div>
    )
}

export default ForFood