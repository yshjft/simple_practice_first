import React , {useEffect, useState}from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../modules/index'
import {CafeState} from '../../modules/cafe'
import CommonLayout from '../../layouts/CommonLayout'
import Place from '../../components/Place/Place'
import Modal from '../../components/common/Modal/Modal'
import styles from './index.scss'


const Cafe = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [cafeData, setCafeData] =  useState<CafeState[]>([])
    const cafes =  useSelector((state:RootState)=>state.cafe)

    useEffect(()=>{
        setCafeData(cafes)
    }, [cafes])

    return (
        <CommonLayout>
            <div className={`${styles.cafeLayout}`}>
                <div className={`${styles.gridContainer}`}>
                    {cafeData.map((cafe, index)=>
                        <Place
                            key={index}
                            type={'cafe'}
                            id={cafe.id}
                            name={cafe.name}
                            score = {cafe.score}
                            setModalVisible={setModalVisible}
                        />
                    )}
                </div>
                <Modal type={'cafe'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </div>
        </CommonLayout>
    )
}

export default Cafe