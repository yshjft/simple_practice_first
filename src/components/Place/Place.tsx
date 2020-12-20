import React from 'react'
import styles from './Place.scss'
import image from '../../Image/restaurant.jpeg'

interface IProps {
    name: string
    score: number
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Place = (props: IProps) => {
    const {name, score, setModalVisible} = props

    return (
        <div className={`${styles.gridContent}`}>
            <div onClick={()=>setModalVisible(true)} className={`${styles.place}`}>
                <div className={`${styles.contentLayout}`}>
                    <div className={`${styles.imgArea}`}>
                        <div className={`${styles.noImg}`}>NO IMAGE</div>
                        {/* <img src={image} className={`${styles.Img}`}></img> */}
                    </div>
                    <div className={`${styles.infoArea}`}>
                        <div>
                            <div className={`${styles.infoName}`}>{name}</div>
                            <div className={`${styles.infoScore}`}>{score} / 5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place