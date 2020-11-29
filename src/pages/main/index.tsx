import React from 'react'
import styles from './index.scss'


const Main = ()=>{
    return (
        <div className={`${styles.mainLayout}`}>
            <div className={`${styles.carouselArea}`}>
                <div>뭐 있나?</div>
                <div>밥</div>
                <div>카페</div>
                <div>공원</div>
            </div>
            <div className={`${styles.selectArea}`}>
                select part
            </div>
        </div>
    )
}

export default Main