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

export const meLogingFailSelector = createSelector(
    [authSelector],
    (auth) =>{
        return auth.logingFail
    }
)