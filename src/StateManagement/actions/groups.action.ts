import { Group } from "../../Components/Models/Group";
import { FETCH_ONE_GROUP, FETCH_ONE_GROUP_FINISHED, GROUPS_LOADING, GROUPS_QUERY_FINISHED, GROUP_QUERY, Group_SEARCH_BY_ID } from "../actionKey";
export const groupQuery = (query: string) => {
    return {
        type: GROUP_QUERY,
        payload: query,
    }
}

export const groupQueryFinished = (groups: Group[]) =>{
    return{
        type: GROUPS_QUERY_FINISHED,
        payload: groups,
    }
}

export const groupsLoading = (bool: boolean) =>{
    return {
        type: GROUPS_LOADING,
        payload: bool,
    }
}

export const groupSearchById = (id: number) =>{
    return {
        type: Group_SEARCH_BY_ID,
        payload: id,
    }
}

export const fetchOneGroupFinished = (group: Group) =>{
    return {
        type: FETCH_ONE_GROUP_FINISHED,
        payload: group,
    }
}

export const fetchOneGroup = (id: number) =>{
    return {
        type: FETCH_ONE_GROUP,
        payload: id,
    }
}

