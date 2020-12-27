import React, {useEffect, useRef} from 'react'
import ModalContent from './ModalContent/ModalContent'
import styles from './Modal.scss'

interface IProps{
    type: 'food' | 'cafe' | 'park'
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: IProps)=>{
    const {type, modalVisible, setModalVisible} = props
    const modalRef = useRef(document.createElement('div'))

    useEffect(()=>{
        if(modalVisible) modalRef.current.style.display = 'block'
        else modalRef.current.style.display = 'none'
    }, [modalVisible])


    function closeModal(){ 
        setModalVisible(false)
    }

    return(
        <div ref={modalRef} className={`${styles.modalLayout}`}>
            <div className={`${styles.modalArea}`}/>
            <div className={`${styles.modal}`}>
                <ModalContent type={type} modalVisible={modalVisible}/>
                <div className={`${styles.footerArea}`}>
                    <button onClick={closeModal} className={`${styles.btn}`}>닫기</button>
                </div>
            </div>
        </div>
    )
}

export default Modal