import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './pages/main'
import foodTypes from './pages/food/types/FoodTypes'
import KoreanFood from './pages/food/types/korean/Korean'
import JapaneseFood from './pages/food/types/japanese/Japanese'
import ChineseFood from './pages/food/types/chinese/Chinese'
import WesternFood from './pages/food/types/western/Western'
import Cafe from './pages/cafe'
import Park from './pages/park'
import BlankLayout from './layouts/BlankLayout'
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
        component: BlankLayout,
        routes: [
            {
                path: '/food/types',
                component: FoodTypes,
            },
            
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
                                    {route.routes.map((r:any, i:number)=>(
                                        <RouteWithSubRoutes key={i} {...r}/>
                                    ))}
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