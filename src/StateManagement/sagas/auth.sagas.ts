import { AnyAction } from "redux";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { meFetchedAction, meFetchErrorAction, meLogedInAction, meLoginErrorAction, meUpdateErrorAction, meUpdateSuccessAction, meUpdatingAction } from "../actions/auth.action";
import {  LoginAPI, meFetchAPI, meUpdateAPI } from "../../Components/Api/Auth.api";
import { User } from "../../Components/Models/User.model";
import { ME_FETCHING, ME_LOGING_IN, ME_UPDATE } from "../actionKeys";

function* meFetching() {
    try{
        const response: User = yield call(meFetchAPI)
        yield put(meFetchedAction(response))
    }
    catch (e){
        console.log(e)
        yield put(meFetchErrorAction(e.response?.data?.message || "Something went Wrong"))
    }
}

function* meUpdating(action: AnyAction){
    try{
        yield put(meUpdateErrorAction(undefined))
        yield put(meUpdatingAction(true))
        const response: User = yield call(meUpdateAPI, action.payload)
        yield put(meFetchedAction(response))
        yield put(meUpdateSuccessAction(true))
        yield put(meUpdatingAction(false))
        yield delay(1000)
        yield put(meUpdateSuccessAction(false))
    }
    catch (e){
        console.log(e)
        yield put(meUpdatingAction(false))
        yield put(meUpdateErrorAction(e.response?.data?.message || "Something went Wrong, unable to update"))
    }
}

function* meLogingIn(action: AnyAction){
    try{
        const response: User = yield call(LoginAPI, action.payload)
        yield put(meLogedInAction(response))
    }
    catch (e){
        console.log(e)
        yield put(meLoginErrorAction(e.response?.data?.message || "Something went Wrong"))
    }
}

export function* meSaga(){
    yield takeEvery(ME_FETCHING, meFetching)
    yield takeEvery(ME_UPDATE, meUpdating)
    yield takeEvery(ME_LOGING_IN, meLogingIn)
}