import { createSelector } from "reselect";
import { usersSelector } from "./app.selector"

export const usersByIdsSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.byIds
    }
)

export const usersIdsSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.usersIds
    }
)

export const usersArrSelector = createSelector(
    [usersByIdsSelector, usersIdsSelector],
    (byIds, usersIds) =>{
        return usersIds.map((id) =>{
            return byIds[id]
        })
    }
)

export const searchedUserIdSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.searchedId
    }
)

export const searchedUserSelector = createSelector(
    [usersByIdsSelector, searchedUserIdSelector],
    (byIds, id) =>{
        return byIds[id!]
    }
)

export const usersLoadingSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.usersLoading
    }
)

export const userLoadingSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.loadingOne
    }
)

export const userFetchingfailSelector = createSelector(
    [usersSelector],
    (users) =>{
        return users.userFatchingFail
    }
)