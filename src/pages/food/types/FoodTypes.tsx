import React, {useState, useEffect}  from 'react'
import CommonLayout from '../../../layouts/CommonLayout'
import styles from './FoodTypes.scss'

const FoodTypes = (props: any)=>{
    const {children, history, location} =props
    const [type, setType] = useState<string>('korean')

    useEffect(()=>{
        history.push('/food/korean')
    }, [])

    useEffect(()=>{
        const foodType = location.pathname.split('/')
        setType(foodType[2])
    }, [location])

    function changeType(to: string){
        history.push(to)
    }

    return (
        <CommonLayout>
            <div className={`${styles.naviBtns}`}>
                <div
                    onClick={()=>changeType('/food/korean')} 
                    className={type === 'korean' ? `${styles.selectedNaviBtn}`:`${styles.naviBtn}`}
                >
                    한식
                </div>
                <div 
                    onClick={()=>changeType('/food/japanese')}
                    className={type === 'japanese' ? `${styles.selectedNaviBtn}`:`${styles.naviBtn}`}
                >
                    중식
                </div>
                <div
                    onClick={()=>changeType('/food/chinese')} 
                    className={type === 'chinese' ? `${styles.selectedNaviBtn}`:`${styles.naviBtn}`}
                >
                    일식
                </div>
                <div 
                    onClick={()=>changeType('/food/western')}
                    className={type === 'western' ? `${styles.selectedNaviBtn}`:`${styles.naviBtn}`}
                >
                    양식
                </div>
            </div>
            {children}
        </CommonLayout>
    )
}

export default FoodTypes