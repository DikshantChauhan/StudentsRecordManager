import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { groupByIdFetchedAction, groupsByQueryFetchedAction } from "../actions/groups.action";
import { fetchGroup as fetchGroupAPI, fetchGroups as fetchGroupsAPI } from "../../Components/Api/Groups";
import { Group } from "../../Components/Models/Group";
import { FETCH_ONE_GROUP, GROUP_QUERY } from "../actionKey";

function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(1000)
    const groups: any = yield call(fetchGroupsAPI, {
        query: action.payload,
        status: "all-groups",
    });
    yield put(groupsByQueryFetchedAction(groups.data.data))
}

function* fetchGroup(action: AnyAction) {
    const response: Group = yield call(fetchGroupAPI, action.payload)
    yield put(groupByIdFetchedAction(response))
}

export function* fetchGroupSaga() {
    yield takeLatest(GROUP_QUERY, fetchGroups);
    yield takeEvery(FETCH_ONE_GROUP, fetchGroup);
}