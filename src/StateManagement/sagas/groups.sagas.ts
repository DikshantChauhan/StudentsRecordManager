import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { groupByIdFetchedAction, groupFetchingFailAction, groupLoadingAction, groupsByQueryFetchedAction } from "../actions/groups.action";
import { groupFetchAPI, groupsFetchAPI } from "../../Components/Api/Groups.api";
import { Group } from "../../Components/Models/Group.model";
import { GROUP_FETCHING, GROUPS_CURRENT_QUERY } from "../actionKeys";

function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(1000)
    const groups: any = yield call(groupsFetchAPI, {
        query: action.payload,
        status: "all-groups",
    });
    yield put(groupsByQueryFetchedAction(groups.data.data))
}

function* groupFetching(action: AnyAction) {
    try{
        const response: Group = yield call(groupFetchAPI, action.payload)
        yield put(groupByIdFetchedAction(response))
        yield put(groupLoadingAction(false))
    }
    catch (e) {
        yield put(groupFetchingFailAction(e.response?.data?.message || "Something went Wrong"))
        yield put(groupLoadingAction(false))
    }
}

export function* fetchGroupSaga() {
    yield takeLatest(GROUPS_CURRENT_QUERY, fetchGroups);
    yield takeEvery(GROUP_FETCHING, groupFetching);
}