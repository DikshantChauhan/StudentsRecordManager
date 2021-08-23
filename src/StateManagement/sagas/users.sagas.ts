import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { userFetchAPI, usersFetchAPI } from "../../Components/Api/Users.api";
import { User } from "../../Components/Models/User.model";
import { USERS_FETCHING, USER_FETCHING } from "../actionKeys";
import { userFetchedAction, userFetchErrorAction, userLoadingAction, usersFetchedAction, usersFetchErrorAction, usersLoadingAction } from "../actions/users.action";

function* usersFetching(action: AnyAction){
    try{
        yield put(usersFetchErrorAction(undefined))
        yield put(usersLoadingAction(true))
        const response: User[] = yield call(usersFetchAPI)
        yield put(usersFetchedAction(response))
        yield put(usersLoadingAction(false))
    }
    catch (e){
        console.log(e)
        yield put(usersFetchErrorAction(e.response?.data?.message || "Something went Wrong, Unable to fetch users"))
        yield put(usersLoadingAction(false))
    }
}

function* userFetching(action: AnyAction){
    try{
        yield put(userFetchErrorAction(undefined))
        yield put(userLoadingAction(true))
        const response: User = yield call(userFetchAPI, action.payload)
        yield put(userFetchedAction(response))
        yield put(userLoadingAction(false))
    }
    catch (e){
        console.log(e)
        yield put(userFetchErrorAction(e.response?.data?.message || "Something went Wrong"))
        yield put(userLoadingAction(false))
    }
}

export function* usersSaga() {
    yield takeEvery(USERS_FETCHING, usersFetching)
    yield takeEvery(USER_FETCHING, userFetching)
}