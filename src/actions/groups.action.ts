import { Group } from "@storybook/api";
import { bindActionCreators } from "redux";
import { actionKey, store } from "../store";

const groupQuery = (query: string) => {
    return {
        type: actionKey.GROUP_QUERY,
        payload: query,
    }
}

const groupQueryFinished = (groups: Group[]) =>{
    return{
        type: actionKey.GROUPS_QUERY_FINISHED,
        payload: groups,
    }
}

const groupsLoading = (bool: boolean) =>{
    return {
        type: actionKey.GROUPS_LOADING,
        payload: bool,
    }
}

const groupSearchById = (id: number) =>{
    return {
        type: actionKey.Group_SEARCH_BY_ID,
        payload: id,
    }
}

const groupSearchByIdFinished = (group: Group) =>{
    return {
        type: actionKey.GROUP_SEARCH_BY_ID_FINISHED,
        payload: group,
    }
}

export const groupsAction = bindActionCreators(
    {
        query: groupQuery,
        queryFinished: groupQueryFinished,
        searchedId: groupSearchById,
        SearchByIdFinished: groupSearchByIdFinished,
        groupsFetching: groupsLoading,
    },
    store.dispatch
)