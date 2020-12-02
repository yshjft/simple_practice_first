import React from 'react'
import styles from './slide.scss'

interface ITitleWithSub {
    title: string
    sub: string
}

interface ISlidProps {
    title:string
    sub:string
    titleWithSub: ITitleWithSub[]
    sliderIndex: number
    setSliderIndex: React.Dispatch<React.SetStateAction<number>>
}

const Slide = (props:ISlidProps) => {
    const {title, sub, titleWithSub, sliderIndex, setSliderIndex} = props
    return(
        <div className={`${styles.slideLayout}`}>
            <div> 
                <div className={`${styles.title}`}>{title}</div>
                <div className={`${styles.sub}`}>{sub}</div>
                <div className={`${styles.markArea}`}>
                    {titleWithSub.map((obj, index) => {
                        if(index === sliderIndex){
                            return <div key={index} className={`${styles.filledMark}`}></div>
                        }else{
                            return <div key={index} className={`${styles.blankMark}`} onClick={()=>setSliderIndex(index)}></div>
                        }
                    })}
            </div>
            </div>
            
        </div>
    )
}

export default Slide