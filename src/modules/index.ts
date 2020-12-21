import {combineReducers} from 'redux'
import food from './food'
import selected from './selected'

const rootReducer = combineReducers({
    food,
    selected
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>