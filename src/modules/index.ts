import {combineReducers} from 'redux'
import food from './food'
import cafe from './cafe'
import selected from './selected'

const rootReducer = combineReducers({
    food,
    cafe,
    selected
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>