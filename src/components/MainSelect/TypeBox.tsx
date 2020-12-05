import React from 'react'
import {RouteComponentProps, withRouter} from "react-router-dom"
import styles from './TypeBox.scss'

interface IProps extends RouteComponentProps{
    title: string
    to: string
}

const TypeBox = (props:IProps)=>{
    const {title, to, history} = props

    function handleClick(){
        history.push(to)
    }

    return(
        <div className={`${styles.typeBoxLayout}`} onClick={handleClick}>
            <div className={`${styles.title}`}>{title}</div>
        </div>
    )
}


// withRouter는 고차 컴포넌트를 인자로 받아 router에 주입하고 다른 컴포넌트를 반환한다
export default withRouter(TypeBox)