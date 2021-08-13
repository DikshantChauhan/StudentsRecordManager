import { LoginData, MeUpdate } from "../../Components/Api/Auth";
import { User } from "../../Components/Models/User";
import { ME_FETCHED, ME_FETCHING, ME_LOGIN, ME_LOGIN_REQ, ME_UPDATE } from "../actionKey";

export const meLoginAction = (user: User) =>{
    return {
        type: ME_LOGIN,
        payload: user,
    }
}

export const meLoginReqAction = (data: LoginData) =>{
    return {
        type: ME_LOGIN_REQ,
        payload: data,
    }
}

export const meFetchedAction = (user: User) =>{
    return {
        type: ME_FETCHED,
        payload: user,
    }
}

export const meFetching = () =>{
    return {
        type: ME_FETCHING,
    }
}

export const meUpdateReq = (formData: MeUpdate) =>{
    return {
        type: ME_UPDATE,
        payload: formData
    }
}

