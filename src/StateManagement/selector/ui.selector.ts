import { createSelector } from "reselect";
import { uiSelector } from "./app.selector";

export const isSidebarOpenSelector = createSelector(
    [uiSelector],
    (uiState) =>{
        return uiState.isSideBarOpen
    }
)

export const isSubMenuOpenSelector = createSelector(
    [uiSelector],
    (uiState) =>{
        return uiState.isSubMenuOpen
    }
)

export const isSubMenuItemsMountSelector = createSelector(
    [uiSelector],
    (uiState) =>{
        return uiState.isSubMenuItemsMount
    }
)