import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../../modules/index'
import {FoodState} from '../../../../../modules/food'
import Place from '../../../../../components/Place/Place'
import Modal from '../../../../../components/common/Modal/Modal'
import styles from '../index.scss'

const Western = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const foods = useSelector((state:RootState)=>state.food)
    const [westernFoods, setWesternFoods] = useState<FoodState[]>([])

    useEffect(()=>{
        setWesternFoods(foods.filter(food=>food.type === 'western'))
    }, [foods])

    return(
        <>
            <div className={`${styles.gridContainer}`}>
                {westernFoods.map((westernFood, index)=>
                    <Place key={index}
                        name={westernFood.name}
                        score={westernFood.score}
                        setModalVisible={setModalVisible}
                    />
                )}
            </div>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Western