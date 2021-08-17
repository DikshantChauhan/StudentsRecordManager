import { AnyAction, Reducer } from "redux";
import { EntityState } from "../../Components/Models/Entity.model";
import { Group } from "../../Components/Models/Group.model";
import { User } from "../../Components/Models/User.model";
import { GROUP_FETCHED, ME_FETCHED, ME_LOGED_IN, SEARCHED_USER_ID, USERS_FETCHED, USERS_FETCHING, USERS_LOADING, USER_FETCHED, USER_FETCHING_FAIL, USER_LOADING } from "../actionKeys";
import { normalizeMany, normalizeOne } from "../helperFunctions";

export interface UsersState extends EntityState<User>{
    usersIds: number[]
    usersLoading: boolean
    userFatchingFail?: string
}

const initialValue: UsersState = {
    byIds: {},
    usersIds: [],
    usersLoading: true,
    loading: false,
    userFatchingFail: undefined
}

export const usersReducer: Reducer<UsersState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){
            case ME_LOGED_IN:
            case ME_FETCHED:
                const newState = 
                    normalizeOne(currentState, dispatchedAction.payload) as UsersState
                return {
                    ...newState
                    }

            case USERS_FETCHED:
                const response = dispatchedAction.payload as User[]
                const state = normalizeMany(currentState, dispatchedAction.payload) as UsersState
                const ids = response.map((item) =>{
                    return item.id
                })

                return { ...state, usersIds: ids, usersLoading: false }

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
                
            case GROUP_FETCHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined){
                    return currentState
                }
                const creator = group.creator
                const participants = group.participants
                const invitedMembers = group.invitedMembers
                const members = [...participants, ...invitedMembers]
                const normalizedMembers = members.reduce((pre, curr) =>{
                    return { ...pre, [curr.id]: curr }
                }, {})

                return { ...currentState, 
                    byIds: { ...currentState.byIds, [creator.id]: creator, ...normalizedMembers } 
                }
                
            default:
                return currentState
        }
    }