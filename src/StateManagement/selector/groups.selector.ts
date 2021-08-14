import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupsSelector } from "./app.selector";

export const groupQuerySelector = (state: AppState) =>{
    return groupsSelector(state).currentQuery
}

export const groupQueryMapSelector = (state: AppState) =>{
    return groupsSelector(state).groupsIdsByQuery
}

export const groupsByIdsSelector = (state: AppState) =>{
    return groupsSelector(state).byIds
}

export const groupSearchedIdSelector = (state: AppState) =>{
    return groupsSelector(state).searchedId
}

export const groupsFetchingSelector = (state: AppState) =>{
    return groupsSelector(state).groupsByQueryLoading
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