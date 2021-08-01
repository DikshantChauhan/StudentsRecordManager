import { Group } from "./Components/Models/Group";
import { User } from "./Components/Models/User";
import { AnyAction, createStore, Reducer } from "redux"

export interface AppState {
    me?: User
    groups: Group[]
    isSideBarOpen: boolean 
}

const initialState: AppState ={
    me: undefined,
    groups: [],
    isSideBarOpen: true,
}

const reducer: Reducer<AppState> = (currentState = initialState, dispatchedAction: AnyAction) =>{
    switch(dispatchedAction.type){
        case 'me/login':
            return {...currentState, me: dispatchedAction.payload};
        case 'groups':
            return {...currentState, groups: dispatchedAction.payload};
        default: 
            return currentState
    }
}

export const store = createStore(reducer)