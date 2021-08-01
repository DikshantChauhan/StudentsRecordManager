import axios from "axios";
import { User } from "../Models/User";
import { LS_LOGIN_TOKEN } from "./Base";

interface LoginData{
    email: string
    password: string
}

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string,
    user: User,
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