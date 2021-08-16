import axios, { CancelToken } from "axios"
import { Group } from "../Models/Group.model"
import { BASE_URL, get_cancelableAPI } from "./Base.api"

interface GroupRequest {
    limit?: number 
    offset?: number 
    query?: string 
    status: "all-groups"
}

interface GroupResponse {
    data: Group[]
}

export const groupsFetchAPI = (data: GroupRequest) =>{
    const url = BASE_URL + "/groups"
    return get_cancelableAPI<GroupResponse>(url, { params: data })
}

export const groupFetchAPI = (id: number) =>{
    const url = BASE_URL + `/groups/${id}`
    return axios.get(url)
    .then((response) =>{
        return response.data.data
    })
}