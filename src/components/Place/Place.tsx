import React from 'react'
import {useDispatch} from 'react-redux'
import {setSelected} from '../../modules/selected'
import image from '../../Image/restaurant.jpeg'
import styles from './Place.scss'


interface IProps {
    type: 'food' | 'cafe' | 'park'
    id: string 
    name: string
    score: number
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Place = (props: IProps) => {
    const {type, id, name, score, setModalVisible} = props
    const dispatch =useDispatch()

    function clickPlace(){
        dispatch(setSelected(type, id))
        setModalVisible(true)
    }

    return (
        <div className={`${styles.gridContent}`}>
            <div onClick={clickPlace} className={`${styles.place}`}>
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