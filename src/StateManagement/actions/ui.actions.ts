import { bindActionCreators } from "redux"
import { IS_SIDEBAR_OPEN } from "../actionKey"
import { store } from "../store"

export const isSidebarOpen = (state: boolean) =>{
    return {
        type: IS_SIDEBAR_OPEN,
        payload: state,
    }
}

export const uiAction = bindActionCreators(
    {
        isSidebarOpen: isSidebarOpen,
    },
    store.dispatch
)