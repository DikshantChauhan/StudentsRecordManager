import { AnyAction, Reducer } from "redux";
import { EntityState } from "../../Components/Models/Entity";
import { User } from "../../Components/Models/User";
import { ME_FETCHED, ME_LOGIN } from "../actionKey";
import { normalizeOne } from "./helperFunctions";

export interface UsersState extends EntityState<User>{
}

const initialValue: UsersState = {
    byIds: {}
}

export const usersReducer: Reducer<UsersState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGIN:
            case ME_FETCHED:
                const newState = 
                    normalizeOne(currentState, dispatchedAction.payload) as UsersState
                return {
                    ...newState
                    }

            default:
                return currentState
        }
    }