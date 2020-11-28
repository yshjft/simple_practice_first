import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './pages/main'
import foodTypes from './pages/food/types'
import Cafe from './pages/cafe'
import Park from './pages/park'
import BlankLayout from './layouts/BlankLayout'

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
                path: '/food/type',
                component: foodTypes
            }
        ]
    },
    {
        path: '/cafe',
        component: Cafe,
        exact: true,
    },
    {
        path: '/park',
        component: Park,
        exact: true,
    },
]

//이거 다른 사람 코드 보고 한것이니 생갈 할것
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
                {routes.map((route, index)=>
                    <RouteWithSubRoutes key={index} {...route}/>
                )}
            </Switch>
        </Router>
    )
}