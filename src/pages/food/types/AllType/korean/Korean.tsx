import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../../modules/index'
import {FoodState} from '../../../../../modules/food'
import Place from '../../../../../components/Place/Place'
import Modal from '../../../../../components/common/Modal/Modal'
import styles from '../index.scss'

const Korean = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [koreanFoods, setKoreanFoods] = useState<FoodState[]>([])
    const foods = useSelector((state:RootState)=>state.food)
    

    useEffect(()=>{
        setKoreanFoods(foods.filter(food => food.type === 'korean'))
    }, [foods])

    return(
        <>
            <div className={`${styles.gridContainer}`}>
                {koreanFoods.map((koreanFood, index) => 
                    <Place 
                        key={index} 
                        type={'food'}
                        id={koreanFood.id}
                        name={koreanFood.name} 
                        score={koreanFood.score}
                        setModalVisible={setModalVisible}
                    />
                )}
            </div>
            <Modal  type={'food'} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Korean