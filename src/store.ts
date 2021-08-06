import {  combineReducers, createStore } from "redux"
import { AuthReducer } from "./reducer/auth.reducer";
import { usersReducer } from "./reducer/users.reducer";
import { groupsReducer } from "./reducer/groups.reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { uiReducer } from "./reducer/ui.reducer";

export const actionKey = {
    ME_LOGIN: "me/login",
    GROUP_QUERY: "groups/query",
    GROUPS_QUERY_FINISHED: "groups/query_finished",
    IS_SIDEBAR_OPEN: "ui/isSideBarOpen",
    IS_SIDEBAR_SUBMENU_OPEN: "ui/isSideBarSubMenuOpen",
}

const reducer = combineReducers({
   auth: AuthReducer,
   users: usersReducer,
   groups: groupsReducer, 
   ui: uiReducer,
})

export const store = createStore(reducer)

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

