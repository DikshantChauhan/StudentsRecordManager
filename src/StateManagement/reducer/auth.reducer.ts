import { AnyAction, Reducer } from "redux";
import { ME_FETCHED, ME_FETCH_ERROR, ME_LOGED_IN, ME_LOGIN_ERROR, ME_UPDATE_ERROR, ME_UPDATE_SUCCESS, ME_UPDATING } from "../actionKeys";

export interface AuthState{
    id?: number
    loginError?: string
    fetchError?: string
    updateError?: string
    updateSuccess?: boolean
    updating?: boolean
}

const initialValue: AuthState = {
    id: undefined,
    loginError: undefined,
    fetchError: undefined,
    updateError: undefined,
    updateSuccess: undefined,
    updating: undefined,
}

export const AuthReducer: Reducer<AuthState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGED_IN:
            case ME_FETCHED:
                const userId = dispatchedAction.payload.id as number
                return { ...currentState, id: userId}

            case ME_LOGIN_ERROR:
                return { ...currentState, loginError: dispatchedAction.payload }
            
            case ME_UPDATE_ERROR:
                return { ...currentState, updateError: dispatchedAction.payload }
            
            case ME_FETCH_ERROR:
                return { ...currentState, fetchError: dispatchedAction.payload }
            
            case ME_UPDATE_SUCCESS:
                return { ...currentState, updateSuccess: dispatchedAction.payload }

            case ME_UPDATING:
                return { ...currentState, updating: dispatchedAction.payload }
            
            default:
                return currentState
        }
    }