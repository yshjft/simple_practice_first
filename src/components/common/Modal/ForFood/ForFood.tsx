import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../modules/index'
import {FoodState} from '../../../../modules/food'
import styles from '../Modal.scss'

const ForFood = () =>{
    const selected =  useSelector((state:RootState)=>state.selected)
    const foods = useSelector((state:RootState) => state.food)
    const [selectedFood, setSelectedFood] = useState<FoodState | null>(null)
    const [scoreMode, setScoreMode] =  useState<'show'|'set'>('show')

    useEffect(()=>{
        const {selectedType, selectedId} =  selected
        const food = foods.find(food => food.id === selectedId && selectedType === 'food')
        setSelectedFood(food as FoodState)
    }, [selected, foods])

    function setScore(){
        if(scoreMode === 'show'){
            setScoreMode('set')
        }else{
            setScoreMode('show')
        }
    }

    return (
        <div className={`${styles.contentArea}`}>
            <div className={`${styles.content}`}>
                <div className={`${styles.imgArea}`}>
                    <div className={`${styles.noImg}`}>NO IMAGE</div>
                    {/* <img src={image} className={`${styles.Img}`}></img> */}
                </div>
                <div className={`${styles.infoArea}`}>
                    <div className={`${styles.infoContentLayout}`}>
                        <div className={`${styles.infoItem}`}>
                            <span className={`${styles.tag}`}>이름 : </span>
                            <span className={`${styles.content}`}>{selectedFood?.name}</span>
                        </div>
                        <div className={`${styles.infoItem}`}>
                            <span className={`${styles.tag}`}>주소 : </span>
                            <span className={`${styles.content}`}>{selectedFood?.address}</span>
                        </div>
                        <div className={`${styles.menuArea}`}>
                            <span className={`${styles.tag}`}>대표 메뉴 : </span>
                            <span className={`${styles.menuList}`}>
                                {selectedFood?.menu.map(menu =>  {
                                    return(
                                        <div className={`${styles.menuItem}`}>
                                            <span>{menu.name}</span>
                                            <span>{menu.price}원</span>
                                        </div>
                                    )
                                })}
                            </span>
                        </div>
                        <div className={`${styles.infoItem}`}>
                            <span className={`${styles.tag}`}>별점 : </span>
                            {
                                scoreMode === 'show' ? 
                                <>
                                    <span className={`${styles.content}`}>{selectedFood?.score}점 / 5점</span>
                                    <span onClick={setScore} className={`${styles.btn}`}>평가하기</span>
                                </> : 
                                <>
                                    <span>hahaha</span>
                                </>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForFood