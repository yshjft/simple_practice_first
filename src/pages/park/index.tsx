import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../modules/index'
import {ParkState} from '../../modules/park'
import CommonLayout from '../../layouts/CommonLayout'
import Place from '../../components/Place/Place'
import Modal from '../../components/common/Modal/Modal'
import styles from './index.scss'

const Park = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [parkData, setParkData] = useState<ParkState[]>([])
    const parks = useSelector((state:RootState)=>state.park)

    useEffect(()=>{
        setParkData(parks)
    }, [parks])

    return(
        <CommonLayout>
            <div className={`${styles.parkLayout}`}>
                <div className={`${styles.gridContainer}`}>
                    {parkData.map((park, index)=>
                        <Place
                            key={index}
                            type={'park'}
                            id={park.id}
                            name={park.name}
                            setModalVisible={setModalVisible}
                        />
                    )}
                </div>
                <Modal type={'park'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </div>
        </CommonLayout>
    )
}

export default Park