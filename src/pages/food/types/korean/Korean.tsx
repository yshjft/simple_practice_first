import React, {useState} from 'react'
import Place from '../../../../components/Place/Place'
import Modal from '../../../../components/common/Modal/Modal'
import styles from './Korean.scss'


const Korean = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    return(
        <div>
           <Place setModalVisible={setModalVisible}/>
           <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </div>
    )
}

export default Korean