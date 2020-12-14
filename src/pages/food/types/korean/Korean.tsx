import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Place from '../../../../components/Place/Place'
import Modal from '../../../../components/common/Modal/Modal'
import styles from './Korean.scss'
import {RootState} from '../../../../modules/index'

const Korean = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const food  = useSelector((state:RootState)=>state.food)
    console.log(food)

    return(
        <>
            <div className={`${styles.koreanLayout}`}>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
                <Place setModalVisible={setModalVisible}/>
            </div>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Korean