import React, {useEffect, useState, useRef} from 'react'
import Slide from '../../components/Slider/Slide'
import styles from './index.scss'

const titleWithSub = [
    {
        title : '뭐 없나?',
        sub: '밥 먹을 곳 없나? 커피 마실 곳 없나? 산책할 곳 없나?'
    },
    {
        title : '밥 뭐 없나?',
        sub: '한식, 중식, 일식, 양식'
    },
    {
        title: '커피는?',
        sub: '카페인은 필수지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    },
    {
        title: '산책은?',
        sub: '공원 가야,지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    },
    {
        title: '산책은?',
        sub: '공원 가야지'
    }
]


const Main = ()=>{
    const [sliderIndex, setSliderIndex] = useState<number>(0)
    const carouselSlideRef = useRef(document.createElement('div'))

    useEffect(()=>{
        carouselSlideRef.current.style.transition = "all 0.5s ease-in-out";
        carouselSlideRef.current.style.transform = `translateX(-${sliderIndex}00%)`;
    }, [sliderIndex])


    function prevBtnClick(){
        carouselSlideRef.current.style.transition = "transform 0.4s ease-in-out"
        setSliderIndex(sliderIndex-1)
    }

    function nextBtnClick(){
        carouselSlideRef.current.style.transition = "transform 0.4s ease-in-out"
        setSliderIndex(sliderIndex+1)
    }

    return (
        <div className={`${styles.mainLayout}`}>
            <div className={`${styles.carouselArea}`}>
                <div ref={carouselSlideRef} className={`${styles.carouselSlide}`}>
                    {titleWithSub.map((obj, index) =>
                        <>
                            {index}
                            <Slide key={index} title={obj.title} sub={obj.sub}/>
                        </>
                    )}
                </div>
                <button className={`${styles.prevBtn}`} onClick={()=>prevBtnClick()}>{`<`}</button>
                <button className={`${styles.nextBtn}`} onClick={()=>nextBtnClick()}>{`>`}</button>
            </div>
            <div className={`${styles.selectArea}`}>
                select part
            </div>
        </div>
    )
}

export default Main