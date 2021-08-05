import { AnyAction, Reducer } from "redux";
import { actionKey } from "../store";

interface UiState {
    isSideBarOpen: boolean 
}

const initialValue: UiState = {
    isSideBarOpen: true,
}

export const uiReducer: Reducer<UiState> = (state = initialValue, action: AnyAction) =>{
    switch(action.type){
        case actionKey.IS_SIDEBAR_OPEN:
            return {...state, isSideBarOpen: action.payload}
        
        default:
            return state
    }
}