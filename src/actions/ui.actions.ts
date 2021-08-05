import { bindActionCreators } from "redux"
import { actionKey, store } from "../store"

const isSidebarOpen = (state: boolean) =>{
    return {
        type: actionKey.IS_SIDEBAR_OPEN,
        payload: state,
    }
}

export const uiAction = bindActionCreators(
    {
        isSidebarOpen: isSidebarOpen,
    },
    store.dispatch
)