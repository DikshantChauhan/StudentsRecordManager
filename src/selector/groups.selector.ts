import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupsSelector } from "./app.selector";

export const groupQuerySelector = (state: AppState) =>{
    return groupsSelector(state).query
}

export const groupQueryMapSelector = (state: AppState) =>{
    return groupsSelector(state).queryMap
}

export const groupsByIdsSelector = (state: AppState) =>{
    return groupsSelector(state).byIds
}

export const groupSearchedIdSelector = (state: AppState) =>{
    return groupsSelector(state).searchedId
}

export const groupsFetchingSelector = (state: AppState) =>{
    //multiple req
    /* return groupsSelector(state).loading[groupsSelector(state).query] */

    return groupsSelector(state).loading
}

export const groupByIdSelector = (state: AppState) =>{
    return groupsByIdsSelector(state)[groupSearchedIdSelector(state)!]
}

/* export const groupsByQuerySelector = (state: AppState) =>{
    const groupIds = groupQueryMapSelector(state)[groupQuerySelector(state)] || []
    const groups = groupIds.map((item) =>{
        return groupsByIdsSelector(state)[item]
    })
    return groups
} */


export const groupsByQuerySelector = createSelector(
    [groupQueryMapSelector, groupQuerySelector, groupsByIdsSelector],
    (groupsQueryMap, groupQuery, groupsByIds) =>{
        const groupIds = groupsQueryMap[groupQuery] || []
        const groups = groupIds.map((item) =>{
            return groupsByIds[item]
        })
        return groups
    }
);