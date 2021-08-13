import { Group } from "../../Components/Models/Group";
import { FETCH_ONE_GROUP, FETCH_ONE_GROUP_FINISHED, GROUPS_LOADING, GROUPS_QUERY_FINISHED, GROUP_QUERY, Group_SEARCH_BY_ID } from "../actionKey";

export const groupsCurrentQueryAction = (query: string) => {
    return {
        type: GROUP_QUERY,
        payload: query,
    }
}

export const groupsByQueryFetchedAction = (groups: Group[]) =>{
    return{
        type: GROUPS_QUERY_FINISHED,
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
        type: Group_SEARCH_BY_ID,
        payload: id,
    }
}

export const groupByIdFetchedAction = (group: Group) =>{
    return {
        type: FETCH_ONE_GROUP_FINISHED,
        payload: group,
    }
}

export const groupByIdFetchingAction = (id: number) =>{
    return {
        type: FETCH_ONE_GROUP,
        payload: id,
    }
}

