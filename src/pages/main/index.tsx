import React from 'react'
import Slider from "react-slick"
import styles from './index.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Main = ()=>{
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={`${styles.mainLayout}`}>
            <div className={`${styles.carouselArea}`}>
                <Slider {...settings}>
                    <div>뭐 있나?</div>
                    <div>밥</div>
                    <div>카페</div>
                    <div>공원</div>
                </Slider>
            </div>
            <div className={`${styles.selectArea}`}>
                select part
            </div>
        </div>
    )
}

export default Main