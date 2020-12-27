import {cafeData} from './data'
import {menu} from './food'

const SET_SCORE =  'cafe/SET_SCORE' as const

export const setCafeScore = (id: string, score: number) => {
    return  {
        type: SET_SCORE,
        id,
        score
    }
}

type CafeAction = ReturnType<typeof setCafeScore>

export interface CafeState {
    id: string
    type: string
    name: string
    address: string
    menu: menu[]
    score: number
    imagePath?: string
}

const initialState: CafeState[] = cafeData

function CafeScore(
    state: CafeState[] = initialState,
    action: CafeAction
):CafeState[] {
    switch(action.type){
        case SET_SCORE:
            const cpyState =  state.concat()
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

export default CafeScore