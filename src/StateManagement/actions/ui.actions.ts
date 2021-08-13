import { IS_SIDEBAR_OPEN } from "../actionKey"

export const sidebarOpenAction = (state: boolean) =>{
    return {
        type: IS_SIDEBAR_OPEN,
        payload: state,
    }
}