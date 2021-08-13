import { useHistory } from "react-router-dom";
import { AnyAction } from "redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { meFetchedAction, meLoginAction } from "../actions/auth.action";
import { Login, me, meUpdate } from "../Components/Api/Auth";
import { User } from "../Components/Models/User";
import { actionKey } from "../store";

function* meFetching(action: AnyAction) {
    const response: User = yield call(me)
    yield put(meFetchedAction(response))
}

function* meUpdating(action: AnyAction){
    const response: User = yield call(meUpdate, action.payload)
    yield put(meFetchedAction(response))
}

function* meLogingIn(action: AnyAction){
    const response: User = yield call(Login, action.payload)
    yield put(meLoginAction(response))
}

export function* meSaga(){
    yield takeEvery(actionKey.ME_FETCHING, meFetching)
    yield takeEvery(actionKey.ME_UPDATE, meUpdating)
    yield takeEvery(actionKey.ME_LOGIN_REQ, meLogingIn)
}