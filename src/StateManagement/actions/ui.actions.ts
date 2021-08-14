import { IS_SIDEBAR_OPEN } from "../actionKeys"

export const sidebarOpenAction = (state: boolean) =>{
    return {
        type: IS_SIDEBAR_OPEN,
        payload: state,
    }
}