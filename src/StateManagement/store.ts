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

