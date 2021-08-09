import axios from "axios"
import { Group } from "../Models/Group"

interface GroupRequest {
    limit?: number 
    offset?: number 
    query?: string 
    status: "all-groups"
}

/* interface GroupResponse {
    data: Group[]
} */

export const fetchGroups = (data: GroupRequest) =>{
    return axios.get("https://api-dev.domecompass.com/groups", 
    { params: data })
    .then((response) =>{
        return response.data.data
    }).catch((error) =>{
        console.error(error)
    })
}

export const fetchGroup = (id: number) =>{
    return axios.get(`https://api-dev.domecompass.com/groups/${id}`)
    .then((response) =>{
        return response.data.data
    }).catch((error) =>{
        console.error(error)
    })
}