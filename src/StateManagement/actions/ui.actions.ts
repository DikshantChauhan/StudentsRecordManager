import { IS_SIDEBAR_OPEN, IS_SUB_MENU_OPEN, IS_SUB_MENU_ITEMS_MOUNT } from "../actionKeys"

export const sidebarOpenAction = (state: boolean) =>{
    return {
        type: IS_SIDEBAR_OPEN,
        payload: state,
    }
}

export const subMenuOpenAction = (index: number) =>{
    return {
        type: IS_SUB_MENU_OPEN,
        payload: index,
    }
}

export const isSubMenuItemsMountAction = (bool: boolean) =>{
    return {
        type: IS_SUB_MENU_ITEMS_MOUNT,
        payload: bool
    }
}