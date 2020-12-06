import React, {useEffect, useState} from 'react'
import Slide from '../../components/Slider/Slide'
import TypeBox from '../../components/MainSelect/TypeBox'
import styles from './index.scss'
import { RouteComponentProps } from 'react-router-dom'

const titleWithSub = [
    {
        title : '뭐 없나?',
        sub: '밥 먹을 곳 없나? 커피 마실 곳 없나? 산책할 곳 없나?'
    },
    {
        title : '밥은?',
        sub: '한식, 중식, 일식, 양식'
    },
    {
        title: '커피는?',
        sub: '카페인은 필수지'
    },
    {
        title: '공원은?',
        sub: '공원도 가줘야지'
    }
]


const Main = (props:RouteComponentProps)=>{
    const [sliderIndex, setSliderIndex] = useState<number>(0)

    function prevBtnClick(){
        if(sliderIndex === 0){
            setSliderIndex(3)
            return
        }

        setSliderIndex(sliderIndex-1)
    }

    function nextBtnClick(){
        if(sliderIndex === 3){
            setSliderIndex(0)
            return
        }
        setSliderIndex(sliderIndex+1)
    }

    return (
        <div className={`${styles.mainLayout}`}>
            <div className={`${styles.carouselArea}`}>
                <div className={`${styles.carouselSlide}`}>
                    <Slide 
                        title={titleWithSub[sliderIndex].title} 
                        sub={titleWithSub[sliderIndex].sub} 
                        titleWithSub={titleWithSub} 
                        sliderIndex={sliderIndex} 
                        setSliderIndex={setSliderIndex}
                    />
                </div>
                <button className={`${styles.prevBtn}`} onClick={()=>prevBtnClick()}>{`<`}</button>
                <button className={`${styles.nextBtn}`} onClick={()=>nextBtnClick()}>{`>`}</button>
            </div>
            <div className={`${styles.selectArea}`}>
                <div className={`${styles.selectLayout}`}>
                    <TypeBox title={'밥 뭐 없나?'} to={"/food/korean"}/>
                    <TypeBox title={'카페 뭐 없나?'} to={"/cafe"}/>
                    <TypeBox title={'공원 뭐 없나?'} to={"/park"}/>
                </div>
            </div>
        </div>
    )
}

export default Main