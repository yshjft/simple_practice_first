import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../modules/index'
import {FoodState, setFoodScore} from '../../../../modules/food'
import {CafeState, setCafeScore} from '../../../../modules/cafe'
import {ParkState} from  '../../../../modules/park'
import styles from '../Modal.scss'
import SetSelected from '../../../../modules/selected'

interface IProps {
    type: 'food' | 'cafe' | 'park'
    modalVisible: boolean
}

const ModalContent = (props:IProps) =>{
    const {type, modalVisible} = props
    const selected =  useSelector((state:RootState)=>state.selected)
    const foods = useSelector((state:RootState) => state.food)
    const cafes = useSelector((state:RootState)=> state.cafe)
    const parks =  useSelector((state:RootState)=> state.park)
    const dispatch = useDispatch()
    const [selectedDetail, setSelectedDetail] = useState<FoodState | CafeState | null>(null)
    const [selectedDetailPark, setSelectedDetailPark] = useState<ParkState | null>(null)
    const [scoreMode, setScoreMode] =  useState<'show'|'set'>('show')
    const inputRef =  useRef(document.createElement('input'))
    const mapRef = useRef(document.createElement('div'))

    useEffect(()=>{
        const {selectedType, selectedId} =  selected
        switch(type){
            case 'food':
                const food = foods.find(food => food.id === selectedId && selectedType === type)
                setSelectedDetail(food as FoodState)
                break
            case 'cafe':
                const cafe =  cafes.find(cafe => cafe.id === selectedId && selectedType === type)
                setSelectedDetail(cafe as CafeState)
                break 
            case 'park':
                const park = parks.find(park => park.id === selectedId  && selectedType === type)
                setSelectedDetailPark(park as ParkState)
                break
            default:
                break
        }        
    }, [type, selected, foods, cafes])

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
        switch(type){
            case 'food':
                dispatch(setFoodScore(selected.selectedId, value))
                break
            case 'cafe':
                dispatch(setCafeScore(selected.selectedId, value))
                break
            default:
                break
        }
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
                            {type !== 'park' && <span className={`${styles.content}`}>{selectedDetail?.name}</span>}
                            {type === 'park' && <span className={`${styles.content}`}>{selectedDetailPark?.name}</span>}
                        </div>
                        {type !== 'park' && 
                            (<div className={`${styles.menuArea}`}>
                                <span className={`${styles.tag}`}>메뉴 </span>
                                <span className={`${styles.menuList}`}>
                                    {selectedDetail?.menu.map(menu =>  {
                                        return(
                                            <div className={`${styles.menuItem}`}>
                                                <span>{menu.name}</span>
                                                <span>{menu.price}원</span>
                                            </div>
                                        )
                                    })}
                                </span>
                            </div>)
                        }
                        {type !== 'park' && 
                            (<div className={`${styles.infoItem}`}>
                                <span className={`${styles.tag}`}>점수 </span>
                                {
                                    scoreMode === 'show' ? 
                                    <>
                                        <span className={`${styles.content}`}>{selectedDetail?.score}점 / 5점</span>
                                        <span onClick={changeMode} className={`${styles.btn}`}>평가하기</span>
                                    </> : 
                                    <>
                                        <input ref={inputRef} type='number' min={0} max={5} onChange={(e)=>handelInput(e)} className={`${styles.input}`}></input>
                                        <span onClick={handleOk} className={`${styles.btn}`}>확인</span>
                                        <span onClick={()=>setScoreMode('show')} className={`${styles.btn}`}>취소</span>
                                    </>
                                }
                            </div>)
                        }
                        {type === 'park' &&
                            (<div className={`${styles.infoItem}`}>
                                <span className={`${styles.tag}`}>평가 </span>
                                <span className={`${styles.content}`}>"{selectedDetailPark?.info}"</span>
                            </div>) 
                        }
                        <div className={`${styles.infoItem}`}>
                            <span className={`${styles.tag}`}>주소 </span>
                            {type !== 'park' && <span className={`${styles.content}`}>{selectedDetail?.address}</span>}
                            {type === 'park' && <span className={`${styles.content}`}>{selectedDetailPark?.address}</span>}
                        </div>
                        <div ref={mapRef} className={`${styles.mapArea}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContent