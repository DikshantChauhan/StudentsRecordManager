import { AnyAction, Reducer } from "redux";
import { ME_FETCHED, ME_LOGED_IN } from "../actionKey";

export interface AuthState{
    id?: number
}

const initialValue = {
    id: undefined
}

export const AuthReducer: Reducer<AuthState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGED_IN:
            case ME_FETCHED:
                const userId = dispatchedAction.payload.id as number
                return { ...currentState, id: userId}
            default:
                return currentState
        }
    }