import React, {useEffect, useState, useRef} from 'react'
import Place from '../../../../components/Place/Place'
import Modal from '../../../../components/common/Modal/Modal'
import styles from './Korean.scss'


const Korean = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const contentRef = useRef(document.createElement('div'))


    return(
        <>
            <div ref={contentRef} className={`${styles.koreanLayout}`}>
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