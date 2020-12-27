import {parkData} from './data'

export interface ParkState {
    id: string
    type: string
    name: string
    address: string
    info: string
}

const initialState: ParkState[] = parkData

function ParkData(
    state: ParkState[] = initialState
): ParkState[]{
    return state
}

export default ParkData