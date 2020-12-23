const SET_SELECTED = 'selected/SET_SELCTED' as const

export const setSelected =  (selectedType:string, selectedId:string)=>{
    return {
        type: SET_SELECTED,
        selectedType,
        selectedId
    }
}

type SelectedAction = ReturnType<typeof setSelected>

export interface ISelected {
    selectedType: string
    selectedId: string
}

const initialState: ISelected = {
    selectedType: '',
    selectedId: ''
}

function SetSelected(
    state: ISelected = initialState,
    action:SelectedAction
):ISelected{
    switch(action.type){
        case SET_SELECTED:
            return {
                selectedType: action.selectedType,
                selectedId: action.selectedId
            }
        default:
            return state
    }
}

export default SetSelected