import axios from "axios";

export const LS_LOGIN_TOKEN = "login_token"
export const BASE_URL = "https://api-dev.domecompass.com"

axios.interceptors.request.use((config) =>{
    const token = localStorage.getItem(LS_LOGIN_TOKEN)

    if(!token){
        return config;
    }

    return { ...config, headers: { ...config.headers, Authorization: localStorage.getItem(LS_LOGIN_TOKEN) } }
})

axios.interceptors.response.use(undefined, (error) =>{
    console.log("error is, ", error)
    if (error.response?.data?.code === 9101){
        localStorage.removeItem(LS_LOGIN_TOKEN)
        window.location.href = "/login"
    }
    return Promise.reject(error)
})