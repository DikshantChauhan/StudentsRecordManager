import { AppState } from "../store";

export const authSelector = (state: AppState) =>{
    return state.auth
}

export const usersSelector = (state: AppState) =>{
    return state.users
}

export const groupsSelector = (state: AppState) =>{
    return state.groups
}

export const uiSelector = (state: AppState) =>{
    return state.ui
};

export const routerSelector = (state: AppState) =>{
    return state.router
};