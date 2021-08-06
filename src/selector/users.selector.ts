import { AppState } from "../store"
import { usersSelector } from "./app.selector"

export const usersByIds = (state: AppState) =>{
    return usersSelector(state).byId
}