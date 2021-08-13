import axios from "axios";
import { User } from "../Models/User";
import { LS_LOGIN_TOKEN } from "./Base";

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string,
    user: User,
}

export interface LoginData{
    email: string
    password: string
}

export const Login = (data: LoginData) => {
    return axios.post<LoginResponse>("https://api-dev.domecompass.com/login", data)
    .then((response) =>{
        localStorage.setItem(LS_LOGIN_TOKEN, response.data.token)
        return response.data.user
    })
};

export const logout = () =>{
    localStorage.removeItem(LS_LOGIN_TOKEN)
}

interface MeResposne{
    data: User;
}

export const me = () => {
    const url = "https://api-dev.domecompass.com/me"
    return axios.get<MeResposne>(url).then( response => response.data.data );
};

export interface MeUpdate{
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    profile_pic_url?: string;
    phone_number?: string;
    alternate_phone_number?: string;
    email?: string;
    gender?: "male" | "female" | "other";
    birth_year?: string;
    birth_month?: string;
    birth_date?: string;
    death_year?: string;
    death_month?: string;
    death_date?: string;
    party?: string;
    home_state_code?: string;
    education?: string;
    hometown?: string;
}

export const meUpdate = (data: MeUpdate) =>{
    const url = "https://api-dev.domecompass.com/me"
    return axios.put(url, data).then((response) =>{
        return response.data.data
    })
}