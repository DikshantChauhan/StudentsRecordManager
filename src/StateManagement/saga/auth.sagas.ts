import { useHistory } from "react-router-dom";
import { AnyAction } from "redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { meFetchedAction, meLogedInAction } from "../actions/auth.action";
import { Login, me, meUpdate } from "../../Components/Api/Auth";
import { User } from "../../Components/Models/User";
import { ME_FETCHING, ME_LOGING_IN, ME_UPDATE } from "../actionKey";

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
    yield put(meLogedInAction(response))
}

export function* meSaga(){
    yield takeEvery(ME_FETCHING, meFetching)
    yield takeEvery(ME_UPDATE, meUpdating)
    yield takeEvery(ME_LOGING_IN, meLogingIn)
}