import React from 'react'
import styles from './Place.scss'
import image from '../../Image/restaurant.jpeg'

interface IProps {
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Place = (props: IProps) => {
    const {setModalVisible} = props

    return (
        <>
            <div onClick={()=>setModalVisible(true)} className={`${styles.place}`}>
                <div className={`${styles.contentLayout}`}>
                    <div className={`${styles.imgArea}`}>
                        {/* <div className={`${styles.noImg}`}>NO IMAGE</div> */}
                        <img src={image} className={`${styles.Img}`}></img>
                    </div>
                    <div className={`${styles.infoArea}`}>
                        <div>
                            <div className={`${styles.infoName}`}>이름</div>
                            <div className={`${styles.infoScore}`}>평점</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Place