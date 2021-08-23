import { NormalizrData } from "../../Components/Models/Entity.model";
import { GROUP_FETCHING, 
    GROUP_FETCHED, 
    GROUPS_LOADING, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    SEARCHED_GROUP_ID, 
    GROUP_LOADING,
    GROUP_FETCH_ERROR,
    GROUP_INDEX,
    GROUPS_FETCH_ERROR,
    GROUPS_BY_QUERY_LOADING} from "../actionKeys";

export const groupsCurrentQueryAction = (query: string) => {
    return {
        type: GROUPS_CURRENT_QUERY,
        payload: query,
    }
}

export const groupsByQueryFetchedAction = (data: NormalizrData) =>{
    return{
        type: GROUPS_BY_QUERY_FETCHED,
        payload: data,
    }
}

export const groupsByQueryFetchingAction = (bool: boolean) =>{
    return {
        type: GROUPS_LOADING,
        payload: bool,
    }
}

export const groupByIdAction = (id: number) =>{
    return {
        type: SEARCHED_GROUP_ID,
        payload: id,
    }
}

export const groupByIdFetchedAction = (data: NormalizrData) =>{
    return {
        type: GROUP_FETCHED,
        payload: data,
    }
}

export const groupByIdFetchingAction = (id: number) =>{
    return {
        type: GROUP_FETCHING,
        payload: id,
    }
}

export const groupLoadingAction = (bool: boolean) =>{
    return {
        type: GROUP_LOADING,
        payload: bool
    }
}

export const groupIndexAction = (index: number) =>{
    return {
        type: GROUP_INDEX,
        payload: index
    }
}

export const groupFetchErrorAction = (reason: string | undefined) =>{
    return {
        type: GROUP_FETCH_ERROR,
        payload: reason,
    }
}

export const groupsFetchErrorAction = (reason: string | undefined) =>{
    return {
        type: GROUPS_FETCH_ERROR,
        payload: reason,
    }
}

export const groupsByQueryLoadingAction = (bool: boolean) =>{
    return {
        type: GROUPS_BY_QUERY_LOADING,
        payload: bool,
    }
}

