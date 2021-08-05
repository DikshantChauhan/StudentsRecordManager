import { bindActionCreators } from "redux";
import { User } from "../Components/Models/User";
import { actionKey, store } from "../store";

const meLoginAction = (user: User) =>{
    return {
        type: actionKey.ME_LOGIN,
        payload: user,
    }
}

export const authAction = bindActionCreators(
    {
        login: meLoginAction,
    }, 
    store.dispatch)