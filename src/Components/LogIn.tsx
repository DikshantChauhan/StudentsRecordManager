import axios from "axios";

axios.interceptors.request.use((config) =>{
    const token = localStorage.getItem(LS_LOGIN_TOKEN)

    if(!token){
        return config;
    }

    return { ...config, headers: { ...config.headers, Authorization: localStorage.getItem(LS_LOGIN_TOKEN) } }
})

axios.interceptors.response.use(undefined, (error) =>{
    if (error.response.data.code === 9101){
        localStorage.removeItem(LS_LOGIN_TOKEN)
        window.location.href = "/login"
    }
    return Promise.reject(error)
})

interface LoginData{
    email: string
    password: string
}

export const LS_LOGIN_TOKEN = "login_token"

export const Login = (data: LoginData) => {
    return axios.post("https://api-dev.domecompass.com/login", data).
    then((response) =>{
        localStorage.setItem(LS_LOGIN_TOKEN, response.data.token)
    })
};

export const logout = () =>{
    localStorage.removeItem(LS_LOGIN_TOKEN)
}

interface GroupRequest {
    limit?: number 
    offset?: number 
    query?: string 
    status: "all-groups"
}

export const fetchGroups = (data: GroupRequest) =>{
    return axios.get("https://api-dev.domecompass.com/groups", 
    { params: data, headers: {Authorization: LS_LOGIN_TOKEN}}).
    then((response) =>{
        return response.data.data
    })
}