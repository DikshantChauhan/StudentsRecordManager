import axios from "axios"
import { User } from "../Models/User.model"
import { BASE_URL } from "./Base.api"

interface UsersFetchAPIResponse{
    data: User[]
}

export const usersFetchAPI = () =>{
    const url = BASE_URL + "/people"
    return axios.get<UsersFetchAPIResponse>(url).then((response) =>{
        return response.data.data
    })
}

interface UserFetchAPIResponse{
    data: User
}

export const userFetchAPI = (id: number) =>{
    const url = BASE_URL + `/people/${id}`
    return axios.get<UserFetchAPIResponse>(url).then((response) =>{
        return response.data.data
    })
}