import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../modules/index'
import {FoodState} from '../../../modules/food'

const FoodInfo = ()=> {
    const foods = useSelector((state:RootState)=>state.food)

    return (
        <>
            <div>name</div>
            <div>address</div>
            <div>menu area</div>
            <div>score</div>
            <div>give score</div>
        </>
    )
}

export default FoodInfo