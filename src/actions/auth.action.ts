import { bindActionCreators } from "redux";
import { LoginData, MeUpdate } from "../Components/Api/Auth";
import { User } from "../Components/Models/User";
import { actionKey, store } from "../store";

export const meLoginAction = (user: User) =>{
    return {
        type: actionKey.ME_LOGIN,
        payload: user,
    }
}

export const meLoginReqAction = (data: LoginData) =>{
    return {
        type: actionKey.ME_LOGIN_REQ,
        payload: data,
    }
}

export const meFetchedAction = (user: User) =>{
    return {
        type: actionKey.ME_FETCHED,
        payload: user,
    }
}

export const meFetching = () =>{
    return {
        type: actionKey.ME_FETCHING,
    }
}

export const meUpdateReq = (formData: MeUpdate) =>{
    return {
        type: actionKey.ME_UPDATE,
        payload: formData
    }
}

