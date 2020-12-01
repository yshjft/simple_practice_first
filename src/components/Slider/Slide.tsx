import React from 'react'
import styles from './slide.scss'

interface ISlidProps {
    title:string
    sub:string
}

const Slide = (props:ISlidProps) => {
    const {title, sub} = props
    return(
        <div className={`${styles.slideLayout}`}>
            <div>
                <div className={`${styles.title}`}>{title}</div>
                <div className={`${styles.sub}`}>{sub}</div>
            </div>
        </div>
    )
}

export default Slide