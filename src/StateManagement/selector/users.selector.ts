import { createSelector } from "reselect";
import { usersSelector } from "./app.selector"

export const usersByIds = createSelector(
    [usersSelector],
    (users) =>{
        return users.byIds
    }
)