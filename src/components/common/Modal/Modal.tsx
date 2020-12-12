import React, {useEffect, useRef} from 'react'
import styles from './Modal.scss'

interface IProps{
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: IProps)=>{
    const {modalVisible, setModalVisible} = props
    const modalRef = useRef(document.createElement('div'))

    useEffect(()=>{
        if(modalVisible){
            modalRef.current.style.display = 'block'
        }else{
            modalRef.current.style.display = 'none'
        }
    }, [modalVisible])

    function closeModal(){
        setModalVisible(false)
    }

    return(
        <div ref={modalRef} className={`${styles.modalLayout}`}>
            <div className={`${styles.modalArea}`}/>
            <div className={`${styles.modal}`}>
                <div className={`${styles.contentArea}`}>
                    content area
                </div>
                <div className={`${styles.footerArea}`}>
                    <button onClick={closeModal} className={`${styles.btn}`}>닫기</button>
                </div>
            </div>
        </div>
    )
}

export default Modal