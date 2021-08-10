import { AnyAction, Reducer } from "redux";
import { actionKey } from "../store";

export interface AuthState{
    id?: number
}

const initialValue = {
    id: undefined
}

export const AuthReducer: Reducer<AuthState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case actionKey.ME_LOGIN:
            case actionKey.ME_FETCHED:
                const userId = dispatchedAction.payload.id as number
                return { ...currentState, id: userId}
            default:
                return currentState
        }
    }