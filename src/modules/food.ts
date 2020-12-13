import {foodData} from './data'

const SET_SCORE = 'food/SET_SCORE' as const

export const setScore = (id:string, score:number) => {
    return {
        type: SET_SCORE,
        id,
        score
    }
}

type FoodAction = ReturnType<typeof setScore>

type menu = {
    name: string,
    price: number
}

export type FoodState = {
    id: string
    type: 'korean' | 'japanese' | 'chinese' | 'western'
    name: string
    address: string
    menu: menu[]
    score: number
    imagePath?: string
}

const initialState: FoodState[]= foodData

function FoodScore(
    state: FoodState[] = initialState,
    action: FoodAction
):FoodState[]{
    switch(action.type){
        case SET_SCORE:
            const cpyState = state.concat()
            for(let i=0; i<cpyState.length; i++){
                if(cpyState[i].id === action.id){
                    cpyState[i].score = action.score
                }
            }
            return cpyState
        default:
            return state
    }
}

export default FoodScore