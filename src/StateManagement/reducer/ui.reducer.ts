import { AnyAction, Reducer } from "redux";
import { IS_SIDEBAR_OPEN } from "../actionKeys";

interface UiState {
    isSideBarOpen: boolean 
}

const initialValue: UiState = {
    isSideBarOpen: true,
}

export const uiReducer: Reducer<UiState> = (state = initialValue, action: AnyAction) =>{
    switch(action.type){
        case IS_SIDEBAR_OPEN:
            return {...state, isSideBarOpen: action.payload}
        
        default:
            return state
    }
}