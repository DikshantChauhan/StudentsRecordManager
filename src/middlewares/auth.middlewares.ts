import { authAction } from "../actions/auth.action"
import {me as meAPI} from "../Components/Api/Auth"

export const me = () =>{
    meAPI().then((user) =>{
        authAction.fetching(user)
    })
}