import { AnyAction, Reducer } from "redux";
import { User } from "../Components/Models/User";
import { actionKey } from "../store";

export interface UsersState {
    byId: {
        [id: number]: User
    }
}

const initialValue: UsersState = {
    byId: {}
}

export const usersReducer: Reducer<UsersState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case actionKey.ME_LOGIN:
                return {
                    ...currentState, 
                    byId: {
                        ...currentState.byId, 
                        [dispatchedAction.payload.id]: dispatchedAction.payload
                        }
                    }

            default:
                return currentState
        }
    }