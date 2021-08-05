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

export const groupsAction = bindActionCreators(
    {
        query: groupQuery,
        queryFinished: groupQueryFinished,
    },
    store.dispatch
)