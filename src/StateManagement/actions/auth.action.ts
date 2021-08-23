import { LoginData, MeUpdate } from "../../Components/Api/Auth.api";
import { User } from "../../Components/Models/User.model";
import { ME_FETCHED, ME_FETCHING, ME_LOGED_IN, ME_LOGIN_ERROR, ME_LOGING_IN, ME_UPDATE, ME_UPDATE_ERROR, ME_FETCH_ERROR, ME_UPDATE_SUCCESS, ME_UPDATING } from "../actionKeys";

export const meLogedInAction = (user: User) =>{
    return {
        type: ME_LOGED_IN,
        payload: user,
    }
}

export const meLogingInAction = (data: LoginData) =>{
    return {
        type: ME_LOGING_IN,
        payload: data,
    }
}

export const meFetchedAction = (user: User) =>{
    return {
        type: ME_FETCHED,
        payload: user,
    }
}

export const meFetchingAction = () =>{
    return {
        type: ME_FETCHING,
    }
}

export const meUpdating = (formData: MeUpdate) =>{
    return {
        type: ME_UPDATE,
        payload: formData
    }
}

export const meLoginErrorAction = (reason: string | undefined) =>{
    return {
        type: ME_LOGIN_ERROR,
        payload: reason,
    }
}

export const meUpdateErrorAction = (reason: string | undefined) =>{
    return {
        type: ME_UPDATE_ERROR,
        payload: reason,
    }
}

export const meUpdateSuccessAction = (bool: boolean) =>{
    return {
        type: ME_UPDATE_SUCCESS,
        payload: bool,
    }
}

export const meUpdatingAction = (bool: boolean) =>{
    return {
        type: ME_UPDATING,
        payload: bool,
    }
}

export const meFetchErrorAction = (reason: string | undefined) =>{
    return {
        type: ME_FETCH_ERROR,
        payload: reason,
    }
}

