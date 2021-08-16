import { LoginData, MeUpdate } from "../../Components/Api/Auth.api";
import { User } from "../../Components/Models/User.model";
import { ME_FETCHED, ME_FETCHING, ME_LOGED_IN, ME_LOGING_FAIL, ME_LOGING_IN, ME_UPDATE } from "../actionKeys";

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

export const meLogingFailAction = (reason: string | undefined) =>{
    return {
        type: ME_LOGING_FAIL,
        payload: reason,
    }
}

