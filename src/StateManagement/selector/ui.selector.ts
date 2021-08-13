import { AppState } from "../store";
import { uiSelector } from "./app.selector";

export const isSidebarOpenSelector = (state: AppState) =>{
    return uiSelector(state).isSideBarOpen
};