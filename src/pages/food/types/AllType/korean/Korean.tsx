import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../../modules/index'
import {FoodState} from '../../../../../modules/food'
import Place from '../../../../../components/Place/Place'
import Modal from '../../../../../components/common/Modal/Modal'
import styles from '../index.scss'



const Korean = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const foods = useSelector((state:RootState)=>state.food)
    const [koreanFoods, setKoreanFoods] = useState<FoodState[]>([])

    useEffect(()=>{
        setKoreanFoods(foods.filter(food => food.type === 'korean'))
    }, [foods])

    return(
        <>
            <div className={`${styles.gridContainer}`}>
                {koreanFoods.map((koreanFood, index) => 
                    <Place key={index} 
                        name={koreanFood.name} 
                        score={koreanFood.score}
                        setModalVisible={setModalVisible}
                    />
                )}
            </div>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Korean