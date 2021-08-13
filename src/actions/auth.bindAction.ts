import { bindActionCreators } from "redux";
import { store } from "../store";
import { meFetchedAction, meLoginAction } from "./auth.action";

export const authAction = bindActionCreators(
    {
        login: meLoginAction,
        fetching: meFetchedAction,
    }, 
    store.dispatch)