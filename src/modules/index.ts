import {combineReducers} from 'redux'
import food from './food'
import cafe from './cafe'
import park from './park'
import selected from './selected'

const rootReducer = combineReducers({
    food,
    cafe,
    park,
    selected
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>