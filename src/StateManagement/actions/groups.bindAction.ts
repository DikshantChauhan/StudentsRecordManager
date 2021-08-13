import { bindActionCreators } from "redux";
import { store } from "../store";
import { groupQuery, groupQueryFinished, groupSearchById, fetchOneGroupFinished, groupsLoading } from "./groups.action";


export const groupsAction = bindActionCreators(
    {
        query: groupQuery,
        queryFinished: groupQueryFinished,
        searchedId: groupSearchById,
        SearchByIdFinished: fetchOneGroupFinished,
        groupsFetching: groupsLoading,
    },
    store.dispatch
)