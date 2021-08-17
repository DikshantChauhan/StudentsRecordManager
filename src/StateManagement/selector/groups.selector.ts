import { createSelector } from "reselect";
import { groupsSelector } from "./app.selector";
import { usersByIdsSelector } from "./users.selector";

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
export const groupsCreatersSelector = createSelector(
    [groupsSelector],
    (groupsState) =>{
        return groupsState.groupsCreaters
    }
)

export const groupCreatorSelector = createSelector(
    [groupSearchedIdSelector, groupsCreatersSelector, usersByIdsSelector],
    (groupId, groups, users) =>{
        const creatorId = groups[groupId!]
        const creator = users[creatorId]
        return creator
    }
)

export const groupsMemberssSelector = createSelector(
    [groupsSelector],
    (groupsState) =>{
        return groupsState.groupsMembers
    }
)

export const groupMembersSelector = createSelector(
    [groupsMemberssSelector, groupSearchedIdSelector, usersByIdsSelector],
    (groupsMembers, groupId, users) =>{

        const groupMembersIds = groupsMembers[groupId!]
        console.log(groupMembersIds)
        if(groupMembersIds === undefined){
            return []
        }
        const members = groupMembersIds.map((id) =>{
            return users[id]
        })

        return members
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
