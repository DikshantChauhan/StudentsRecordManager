import { Group } from "../../Components/Models/Group.model";
import { GROUP_FETCHING, 
    GROUP_FETCHED, 
    GROUPS_LOADING, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    SEARCHED_GROUP_ID, 
    GROUP_LOADING,
    GROUP_FETCHING_FAIL,
    GROUP_INDEX} from "../actionKeys";

export const groupsCurrentQueryAction = (query: string) => {
    return {
        type: GROUPS_CURRENT_QUERY,
        payload: query,
    }
}

export const groupsByQueryFetchedAction = (groups: { [id: number]: Group }) =>{
    return{
        type: GROUPS_BY_QUERY_FETCHED,
        payload: groups,
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

export const groupByIdFetchedAction = (group: Group) =>{
    return {
        type: GROUP_FETCHED,
        payload: group,
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

export const groupFetchingFailAction = (reason: string | undefined) =>{
    return {
        type: GROUP_FETCHING_FAIL,
        payload: reason,
    }
}

