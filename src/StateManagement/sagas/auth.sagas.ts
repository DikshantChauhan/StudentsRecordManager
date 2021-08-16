import { useHistory } from "react-router-dom";
import { AnyAction } from "redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { meFetchedAction, meLogedInAction, meLogingFailAction } from "../actions/auth.action";
import {  LoginAPI, meFetchAPI, meUpdateAPI } from "../../Components/Api/Auth.api";
import { User } from "../../Components/Models/User.model";
import { ME_FETCHING, ME_LOGING_IN, ME_UPDATE } from "../actionKeys";

function* meFetching(action: AnyAction) {
    const response: User = yield call(meFetchAPI)
    yield put(meFetchedAction(response))
}

function* meUpdating(action: AnyAction){
    const response: User = yield call(meUpdateAPI, action.payload)
    yield put(meFetchedAction(response))
}

function* meLogingIn(action: AnyAction){
    try{
        const response: User = yield call(LoginAPI, action.payload)
        yield put(meLogedInAction(response))
    }
    catch (e){
        yield put(meLogingFailAction(e.response?.data?.message || "Something went Wrong"))
    }
}

export function* meSaga(){
    yield takeEvery(ME_FETCHING, meFetching)
    yield takeEvery(ME_UPDATE, meUpdating)
    yield takeEvery(ME_LOGING_IN, meLogingIn)
}