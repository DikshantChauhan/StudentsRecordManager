import { AnyAction, Reducer } from "redux";
import { ME_FETCHED, ME_LOGED_IN, ME_LOGING_FAIL } from "../actionKeys";

export interface AuthState{
    id?: number
    logingFail?: string
}

const initialValue: AuthState = {
    id: undefined,
    logingFail: undefined
}

export const AuthReducer: Reducer<AuthState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGED_IN:
            case ME_FETCHED:
                const userId = dispatchedAction.payload.id as number
                return { ...currentState, id: userId}

            case ME_LOGING_FAIL:
                return { ...currentState, logingFail: dispatchedAction.payload }
            
            default:
                return currentState
        }
    }