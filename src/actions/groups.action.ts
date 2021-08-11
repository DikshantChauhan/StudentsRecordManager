import { Group } from "@storybook/api";
import { actionKey } from "../store";

export const groupQuery = (query: string) => {
    return {
        type: actionKey.GROUP_QUERY,
        payload: query,
    }
}

export const groupQueryFinished = (groups: Group[]) =>{
    return{
        type: actionKey.GROUPS_QUERY_FINISHED,
        payload: groups,
    }
}

export const groupsLoading = (bool: boolean) =>{
    return {
        type: actionKey.GROUPS_LOADING,
        payload: bool,
    }
}

export const groupSearchById = (id: number) =>{
    return {
        type: actionKey.Group_SEARCH_BY_ID,
        payload: id,
    }
}

export const groupSearchByIdFinished = (group: Group) =>{
    return {
        type: actionKey.GROUP_SEARCH_BY_ID_FINISHED,
        payload: group,
    }
}

