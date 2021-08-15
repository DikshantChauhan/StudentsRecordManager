import { AnyAction, Reducer } from "redux";
import { IS_SIDEBAR_OPEN, IS_SUB_MENU_OPEN, IS_SUB_MENU_ITEMS_MOUNT } from "../actionKeys";

interface UiState {
    isSideBarOpen: boolean 
    isSubMenuOpen?: number
    isSubMenuItemsMount: boolean
}

const initialValue: UiState = {
    isSideBarOpen: true,
    isSubMenuOpen: undefined,
    isSubMenuItemsMount: false,
}

export const uiReducer: Reducer<UiState> = (state = initialValue, action: AnyAction) =>{
    switch(action.type){
        case IS_SIDEBAR_OPEN:
            return {...state, isSideBarOpen: action.payload}

        case IS_SUB_MENU_OPEN:
            return { ...state, isSubMenuOpen: action.payload }

        case IS_SUB_MENU_ITEMS_MOUNT:
            return { ...state, isSubMenuItemsMount: action.payload }
        
        default:
            return state
    }
}