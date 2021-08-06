import { createSelector } from "reselect";
import { authSelector } from "./app.selector";
import { usersByIds } from "./users.selector";

/* export const meSelector = (state: AppState) =>{
    const userId = authSelector(state).id
    const user = (userId === undefined) ? undefined:usersByIds(state)[userId]
    return user
} */

export const meSelector = createSelector(
    [authSelector, usersByIds],
    (auth, users) =>{
        const userId = auth.id
        const user = (userId === undefined) ? undefined : users[userId]

        return user
    }
)