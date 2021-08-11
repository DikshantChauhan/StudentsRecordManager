import {  applyMiddleware, combineReducers, createStore } from "redux"
import { AuthReducer } from "./reducer/auth.reducer";
import { usersReducer } from "./reducer/users.reducer";
import { groupsReducer } from "./reducer/groups.reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { uiReducer } from "./reducer/ui.reducer";
import { sagaMiddleware } from "./saga";
import { fetchGroupSaga } from "./saga/groups.sagas";
import { composeWithDevTools } from "redux-devtools-extension";

export const actionKey = {
    ME_LOGIN: "me/login",
    GROUP_QUERY: "groups/query",
    GROUPS_QUERY_FINISHED: "groups/query_finished",
    IS_SIDEBAR_OPEN: "ui/isSideBarOpen",
    IS_SIDEBAR_SUBMENU_OPEN: "ui/isSideBarSubMenuOpen",
    Group_SEARCH_BY_ID: "group/search",
    GROUP_SEARCH_BY_ID_FINISHED: "group/search_finished",
    ME_FETCHED: "me/fetched",
    GROUPS_LOADING: "groups/loading",
}

const reducer = combineReducers({
   auth: AuthReducer,
   users: usersReducer,
   groups: groupsReducer, 
   ui: uiReducer,
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(fetchGroupSaga);

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

