import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { userFetchAPI, usersFetchAPI } from "../../Components/Api/Users.api";
import { User } from "../../Components/Models/User.model";
import { USERS_FETCHING, USER_FETCHING } from "../actionKeys";
import { userFetchedAction, userFetchingFailAction, userLoadingAction, usersFetchedAction } from "../actions/users.action";

function* usersFetching(action: AnyAction){
    const response: User[] = yield call(usersFetchAPI)
    yield put(usersFetchedAction(response))
}

function* userFetching(action: AnyAction){
    try{
        const response: User = yield call(userFetchAPI, action.payload)
        yield put(userFetchedAction(response))
        yield put(userLoadingAction(false))
    }
    catch (e){
        yield put(userFetchingFailAction(e.response?.data?.message || "Something went Wrong"))
        yield put(userLoadingAction(false))
    }
}

export function* usersSaga() {
    yield takeEvery(USERS_FETCHING, usersFetching)
    yield takeEvery(USER_FETCHING, userFetching)
}