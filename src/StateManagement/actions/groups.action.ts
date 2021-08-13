import { Group } from "../../Components/Models/Group";
import { GROUP_FETCHING, 
    GROUP_FETCHED, 
    GROUPS_LOADING, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    Group_BY_ID } from "../actionKey";

export const groupsCurrentQueryAction = (query: string) => {
    return {
        type: GROUPS_CURRENT_QUERY,
        payload: query,
    }
}

export const groupsByQueryFetchedAction = (groups: Group[]) =>{
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
        type: Group_BY_ID,
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

