import { createSelector } from "reselect";
import { authSelector } from "./app.selector";
import { usersByIdsSelector } from "./users.selector";

export const meSelector = createSelector(
    [authSelector, usersByIdsSelector],
    (auth, users) =>{
        const userId = auth.id
        const user = (userId === undefined) ? undefined : users[userId]

        return user
    }
);

export const meLoginErrorSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.loginError
    }
)

export const meUpdateErrorSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.updateError
    }
)

export const meUpdateSuccessSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.updateSuccess
    }
)

export const meUpdatingSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.updating
    }
)

export const meFetchErrorSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.fetchError
    }
)

