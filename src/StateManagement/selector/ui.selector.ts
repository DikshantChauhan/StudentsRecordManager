import { createSelector } from "reselect";
import { uiSelector } from "./app.selector";

export const isSidebarOpenSelector = createSelector(
    [uiSelector],
    (ui) =>{
        return ui.isSideBarOpen
    }
)