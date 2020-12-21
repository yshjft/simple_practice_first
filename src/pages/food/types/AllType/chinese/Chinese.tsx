import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../../../../modules/index'
import {FoodState} from '../../../../../modules/food'
import Place from '../../../../../components/Place/Place'
import Modal from '../../../../../components/common/Modal/Modal'
import styles from '../index.scss'

const Chinese = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const foods = useSelector((state:RootState)=>state.food)
    const [chineseFoods, setChineseFoods] = useState<FoodState[]>([])

    useEffect(()=>{
        setChineseFoods(foods.filter(food => food.type === 'chinese'))
    }, [foods])

    return(
        <>
            <div className={`${styles.gridContainer}`}>
                {chineseFoods.map((chineseFood, index)=>
                    <Place 
                        key={index}
                        type={'food'}
                        id={chineseFood.id}
                        name={chineseFood.name}
                        score={chineseFood.score}
                        setModalVisible={setModalVisible}
                    />
                )}
            </div>
            <Modal type={"food"} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Chinese