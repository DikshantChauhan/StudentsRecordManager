import { createSelector } from "reselect";
import { groupsSelector } from "./app.selector";

export const groupsCurrentQuerySelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.currentQuery
    }
)

export const groupsIdsByQuerySelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.groupsIdsByQuery
    }
)

export const groupsByIdsSelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.byIds
    }
)

export const groupSearchedIdSelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.searchedId
    }
)

export const groupsByQueryLoadingSelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.groupsByQueryLoading
    }
)

export const groupLoadingSelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.loading
    }
)

export const groupByIdSelector = createSelector(
    [groupsByIdsSelector, groupSearchedIdSelector],
    (byIds, id) =>{
        return byIds[id!]
    }
)

export const groupFetchingfailSelector = createSelector(
    [groupsSelector],
    (groups) =>{
        return groups.groupFetchingFail
    }
)

export const groupsByQuerySelector = createSelector(
    [groupsIdsByQuerySelector, groupsCurrentQuerySelector, groupsByIdsSelector],
    (groupsQueryMap, groupQuery, groupsByIds) =>{
        const groupIds = groupsQueryMap[groupQuery] || []
        const groups = groupIds.map((item) =>{
            return groupsByIds[item]
        })
        return groups
    }
);
