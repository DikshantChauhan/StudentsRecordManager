import { bindActionCreators } from "redux";
import { store } from "../store";
import { groupQuery, groupQueryFinished, groupSearchById, groupSearchByIdFinished, groupsLoading } from "./groups.action";


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