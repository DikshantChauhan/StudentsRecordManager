import { normalize } from "normalizr";
import { AnyAction, Reducer } from "redux";
import { EntityState, entityStateInitialValue } from "../../Components/Models/Entity.model";
import { User } from "../../Components/Models/User.model";
import { userSchema } from "../helperFunctions";
import { ME_FETCHED, ME_LOGED_IN, SEARCHED_USER_ID, USERS_FETCHED, USERS_LOADING, USER_FETCHED, USER_FETCHING_FAIL, USER_LOADING } from "../actionKeys";

export interface UsersState extends EntityState<User>{
    usersIds: number[]
    usersLoading: boolean
    userFatchingFail?: string
}

const initialValue: UsersState = {
    ...entityStateInitialValue,
    usersIds: [],
    usersLoading: true,
    userFatchingFail: undefined
}

export const usersReducer: Reducer<UsersState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGED_IN:
            case ME_FETCHED:{
                const response = dispatchedAction.payload
                const normalizedData = normalize(response, userSchema)
                const user = normalizedData.entities.users

                return { ...currentState, byIds: {...currentState.byIds, ...user} }
            }

            case USERS_FETCHED:
                const response = dispatchedAction.payload as User[]
                const normalizedData = normalize(response, [userSchema])
                const users = normalizedData.entities.users
                const ids = normalizedData.result

                return { 
                    ...currentState,
                    byIds: { ...currentState.byIds, ...users },
                    usersIds: ids,
                    usersLoading: false 
                    }

            case SEARCHED_USER_ID:
                return { ...currentState, searchedId: dispatchedAction.payload }

            case USER_FETCHED:
                const user = dispatchedAction.payload as User
                if(user === undefined){
                    return currentState
                }
                return { ...currentState, byIds: { ...currentState.byIds, [user.id]: user } }

            case USER_LOADING:
                return { ...currentState, loading: dispatchedAction.payload }

            case USERS_LOADING:
                return { ...currentState, usersLoading: dispatchedAction.payload }
            
            case USER_FETCHING_FAIL:
                return { ...currentState, userFatchingFail: dispatchedAction.payload}
                
                
            default:
                return currentState
        }
    }