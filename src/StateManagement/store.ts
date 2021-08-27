import {  applyMiddleware, combineReducers, createStore } from "redux"
import { AuthReducer } from "./reducer/auth.reducer";
import { usersReducer } from "./reducer/users.reducer";
import { groupsReducer } from "./reducer/groups.reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { uiReducer } from "./reducer/ui.reducer";
import { sagaMiddleware } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./sagas/root.sagas";
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const reducer = combineReducers({
   auth: AuthReducer,
   users: usersReducer,
   groups: groupsReducer, 
   ui: uiReducer,
   router: connectRouter(history),
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

