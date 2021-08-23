import { User } from "../../Components/Models/User.model"
import { SEARCHED_USER_ID, USERS_FETCHED, USERS_FETCHING, USERS_FETCH_ERROR, USERS_LOADING, USER_FETCHED, USER_FETCHING, USER_FETCH_ERROR, USER_LOADING } from "../actionKeys"

export const usersFetchingAction = () =>{
    return {
        type: USERS_FETCHING,
    }
}

export const userFetchingAction = (id: number) =>{
    return {
        type: USER_FETCHING,
        payload: id
    }
}

export const usersFetchedAction = (data: User[]) =>{
    return {
        type: USERS_FETCHED,
        payload: data
    }
}

export const userFetchedAction = (data: User) =>{
    return {
        type: USER_FETCHED,
        payload: data
    }
}

export const searchedUserIdAction = (id: number) =>{
    return {
        type: SEARCHED_USER_ID,
        payload: id,
    }
}

export const userLoadingAction = (bool: boolean) =>{
    return {
        type: USER_LOADING,
        payload: bool,
    }
}

export const usersLoadingAction = (bool: boolean) =>{
    return {
        type: USERS_LOADING,
        payload: bool,
    }
}

export const userFetchErrorAction = (reason: string | undefined) =>{
    return {
        type: USER_FETCH_ERROR,
        payload: reason,
    }
}

export const usersFetchErrorAction = (reason: string | undefined) =>{
    return {
        type: USERS_FETCH_ERROR,
        payload: reason,
    }
}