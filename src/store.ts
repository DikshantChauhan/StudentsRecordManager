import {  applyMiddleware, combineReducers, createStore } from "redux"
import { AuthReducer } from "./reducer/auth.reducer";
import { usersReducer } from "./reducer/users.reducer";
import { groupsReducer } from "./reducer/groups.reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { uiReducer } from "./reducer/ui.reducer";
import { sagaMiddleware } from "./saga";
import { fetchGroupSaga } from "./saga/groups.sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { meSaga } from "./saga/auth.sagas";

export const actionKey = {
    ME_LOGIN_REQ: "me/login_req",
    ME_LOGIN: "me/login",
    GROUP_QUERY: "groups/query",
    GROUPS_QUERY_FINISHED: "groups/query_finished",
    IS_SIDEBAR_OPEN: "ui/isSideBarOpen",
    IS_SIDEBAR_SUBMENU_OPEN: "ui/isSideBarSubMenuOpen",
    Group_SEARCH_BY_ID: "group/search",
    FETCH_ONE_GROUP_FINISHED: "groups/fetch_one_group_finished",
    ME_FETCHED: "me/fetched",
    GROUPS_LOADING: "groups/loading",
    FETCH_ONE_GROUP: "groups/fetch_one_group",
    ME_FETCHING: "me/fetching",
    ME_UPDATE: "me/update",
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
sagaMiddleware.run(meSaga);

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

