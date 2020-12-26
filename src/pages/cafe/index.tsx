import React , {useEffect, useState}from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../modules/index'
import {CafeState} from '../../modules/cafe'
import CommonLayout from '../../layouts/CommonLayout'

const Cafe = ()=>{
    return (
        <CommonLayout>
            <div>this is cafe page</div>
        </CommonLayout>
    )
}

export default Cafe