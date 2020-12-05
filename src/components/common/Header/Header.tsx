import React, { useEffect, useState } from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import styles from './Header.scss'

const Header = (props: RouteComponentProps) => {
    const {history, location} = props
    const [type, setType] = useState<string>()

    useEffect(()=>{
        const type =location.pathname.split('/')
        switch(type[1]){
            case 'food':
                setType('food')
                break
            case 'cafe':
                setType('cafe')
                break
            case 'park':
                setType('park')
                break
            default:
                break
        }
    }, [location])

    function movePage(to: string){
        history.push(to)
    }

    return (
        <div className={`${styles.headerLayout}`}>
            <div className={`${styles.title}`} onClick={(e)=>movePage('/')}>뭐 없나?</div>
            <div className={`${styles.btnsLayout}`}>
                <div 
                    onClick={()=>movePage('/food')}
                    className={type !== 'food' ? `${styles.btn}` : `${styles.selectedBtn}`} >
                    밥
                </div>
                <div 
                    onClick={()=>movePage('/cafe')} 
                    className={type !== 'cafe' ? `${styles.btn}` : `${styles.selectedBtn}`}>
                    카페
                </div>
                <div 
                    onClick={()=>movePage('/park')} 
                    className={type !== 'park' ? `${styles.btn}` : `${styles.selectedBtn}`}>
                    공원
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)