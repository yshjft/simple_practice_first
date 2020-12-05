import React from 'react'
import styles from './Footer.scss'

const Footer = ()=>{
    return(
        <div className={`${styles.footerLayout}`}>
            <div className={`${styles.by}`}>by yshjft</div>
            <a href='https://github.com/yshjft' className={`${styles.link}`}>yshjft's github</a>
        </div>
    )
}

export default Footer