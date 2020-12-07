import React from 'react'
import styles from './Korean.scss'

const Korean = ()=>{
    return(
        <div>
            <div className={`${styles.place}`}>
                <div className={`${styles.contentLayout}`}>
                    <div className={`${styles.imgArea}`}>사진</div>
                    <div>
                        <div>이름</div>
                        <div>평점</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Korean