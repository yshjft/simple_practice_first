import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../modules/index'
import {FoodState, setScore} from '../../../../modules/food'
import styles from '../Modal.scss'

interface IProps {
    modalVisible: boolean
}

const ForFood = (props:IProps) =>{
    const {modalVisible} = props
    const selected =  useSelector((state:RootState)=>state.selected)
    const foods = useSelector((state:RootState) => state.food)
    const dispatch = useDispatch()
    const [selectedFood, setSelectedFood] = useState<FoodState | null>(null)
    const [scoreMode, setScoreMode] =  useState<'show'|'set'>('show')
    const inputRef =  useRef(document.createElement('input'))
    const mapRef = useRef(document.createElement('div'))

    useEffect(()=>{
        const {selectedType, selectedId} =  selected
        const food = foods.find(food => food.id === selectedId && selectedType === 'food')
        setSelectedFood(food as FoodState)
    }, [selected, foods])

    useEffect(()=>{
        if(modalVisible === true) setScoreMode('show')
    }, [modalVisible])

    function changeMode(){
        if(scoreMode === 'show'){
            setScoreMode('set')
        }else{
            setScoreMode('show')
        }
    }

    function handelInput(e:React.ChangeEvent<HTMLInputElement>){
        const value = Number(e.target.value)
        if(value > 5) inputRef.current.value = '5'
        if(value < 0) inputRef.current.value = '0'
    }

    function handleOk(){
        const value = Number(inputRef.current.value)
        dispatch(setScore(selected.selectedId, value))
        setScoreMode('show')
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
                            <span className={`${styles.tag}`}>이름 </span>
                            <span className={`${styles.content}`}>{selectedFood?.name}</span>
                        </div>
                        
                        <div className={`${styles.menuArea}`}>
                            <span className={`${styles.tag}`}>대표 메뉴 </span>
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
                            <span className={`${styles.tag}`}>별점 </span>
                            {
                                scoreMode === 'show' ? 
                                <>
                                    <span className={`${styles.content}`}>{selectedFood?.score}점 / 5점</span>
                                    <span onClick={changeMode} className={`${styles.btn}`}>평가하기</span>
                                </> : 
                                <>
                                    <input ref={inputRef} type='number' min={0} max={5} onChange={(e)=>handelInput(e)} className={`${styles.input}`}></input>
                                    <span onClick={handleOk} className={`${styles.btn}`}>확인</span>
                                    <span onClick={()=>setScoreMode('show')} className={`${styles.btn}`}>취소</span>
                                </>
                            }
                        </div>
                        <div className={`${styles.infoItem}`}>
                            <span className={`${styles.tag}`}>주소 </span>
                            <span className={`${styles.content}`}>{selectedFood?.address}</span>
                        </div>
                        <div ref={mapRef} className={`${styles.mapArea}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForFood