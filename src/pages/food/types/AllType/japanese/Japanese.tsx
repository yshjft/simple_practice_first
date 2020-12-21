import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../../modules/index'
import {FoodState} from '../../../../../modules/food'
import Place from '../../../../../components/Place/Place'
import Modal from '../../../../../components/common/Modal/Modal'
import styles from '../index.scss'

const Japanese = ()=>{
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const foods = useSelector((state:RootState)=>state.food)
    const [japaneseFoods, setJapaneseFoods] = useState<FoodState[]>([])


    useEffect(()=>{
        setJapaneseFoods(foods.filter(food => food.type === 'japanese'))
    }, [foods])


    return(
        <>
            <div className={`${styles.gridContainer}`}>
                {japaneseFoods.map((japaneseFood, index)=> 
                    <Place 
                        key={index}
                        type={'food'}
                        id={japaneseFood.id}
                        name={japaneseFood.name}
                        score={japaneseFood.score} 
                        setModalVisible={setModalVisible}
                    />
                )}
            </div>
            <Modal type={"food"} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </>
    )
}

export default Japanese