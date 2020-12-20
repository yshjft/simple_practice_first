import React from 'react'
import { TransitionGroup, CSSTransition} from "react-transition-group" //사용할지 안할지 모름
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './pages/main'
import foodTypes from './pages/food/types/FoodTypes'
import KoreanFood from './pages/food/types/AllType/korean/Korean'
import JapaneseFood from './pages/food/types/AllType/japanese/Japanese'
import ChineseFood from './pages/food/types/AllType/chinese/Chinese'
import WesternFood from './pages/food/types/AllType/western/Western'
import Cafe from './pages/cafe'
import Park from './pages/park'
import FoodTypes from './pages/food/types/FoodTypes'

interface IRoute {
    path: string
    component: React.FC
    exact: boolean
    routes: IRoute[]
}

const routes = [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/food',
        component: FoodTypes,
        routes: [
            {
                path: '/food/korean',
                component: KoreanFood
            },
            {
                path: '/food/japanese',
                component: JapaneseFood
            },
            {
                path: '/food/chinese',
                component: ChineseFood
            },
            {
                path: '/food/western',
                component: WesternFood
            }
        ]
    },
    {
        path: '/cafe',
        component: Cafe,
    },
    {
        path: '/park',
        component: Park,
    },
]

 function RouteWithSubRoutes(route:any){
    return(
        <Route
            path={route.path}
            render={(props)=>{
                return(
                    <>
                        <route.component {...props} routes={route.routes}>
                            {route.routes && (
                                <Switch>
                                    {route.routes.map((r:any, i:number)=> <RouteWithSubRoutes key={i} {...r}/>)}
                                </Switch>
                            )}
                        </route.component>
                    </>
                )
            }}
        />
    )
}

export default function  RouteConfig() {
    return(
        <Router>
            <Switch>
                {routes.map((route, index)=>{
                    return <RouteWithSubRoutes key={index} {...route}/>}
                )}
            </Switch>
        </Router>
    )
}