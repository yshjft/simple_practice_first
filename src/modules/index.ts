import {combineReducers} from 'redux'
import food from './food'

const rootReducer = combineReducers({
    food
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>