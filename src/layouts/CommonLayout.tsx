import React from 'react'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import styles from './CommonLayout.scss'

const CommonLayout = (props:any)=>{
    return (
        <div className={`${styles.entireLayout}`}>
            <div className={`${styles.headerArea}`}>
                <Header/>
            </div>
            <div className={`${styles.contentArea}`}>
                {props.children}
            </div>
            <div className={`${styles.footerArea}`}>
                <Footer/>
            </div>
        </div>
    )
}

export default CommonLayout