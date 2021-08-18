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
export const groupsCreatorsSelector = createSelector(
    [groupsSelector],
    (groupsState) =>{
        return groupsState.groupsCreaters
    }
)

export const groupCreatorSelector = createSelector(
    [groupSearchedIdSelector, groupsCreatorsSelector, usersByIdsSelector],
    (groupId, groups, users) =>{
        const creatorId = groups[groupId!]
        const creator = users[creatorId]
        return creator
    }
)

export const groupsInvitedMembersSelector = createSelector(
    [groupsSelector],
    (groupsState) =>{
        return groupsState.invitedMembers
    }
)

export const groupInvitedMembersSelector = createSelector(
    [groupsInvitedMembersSelector, groupSearchedIdSelector, usersByIdsSelector],
    (groupsInvitedMembers, id, users) =>{
        const invitedMembersIds =  groupsInvitedMembers[id!]
        if(invitedMembersIds === undefined){
            return []
        }
        const invitedMembers = invitedMembersIds.map((id) =>{
            return users[id]
        })
        return invitedMembers
    }
)

export const groupsParticipentsSelector = createSelector(
    [groupsSelector],
    (groupsState) =>{
        return groupsState.participants
    }
)

export const grouParticipentsSelector = createSelector(
    [groupsParticipentsSelector, groupSearchedIdSelector, usersByIdsSelector],
    (groupsParticipents, id, users) =>{
        const invitedMembersIds =  groupsParticipents[id!]
        if(invitedMembersIds === undefined){
            return []
        }
        const participents = invitedMembersIds.map((id) =>{
            return users[id]
        })
        return participents
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
        return groups.loadingOne
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
