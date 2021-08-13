import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { fetchOneGroupFinished, groupQueryFinished } from "../actions/groups.action";
import { fetchGroup, fetchGroups as fetchGroupsAPI } from "../Components/Api/Groups";
import { Group } from "../Components/Models/Group";
import { actionKey } from "../store";

function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(1000)
    const groups: any = yield call(fetchGroupsAPI, {
        query: action.payload,
        status: "all-groups",
    });
    yield put(groupQueryFinished(groups.data.data))
}

function* fetchOneGroup(action: AnyAction) {
    const response: Group = yield call(fetchGroup, action.payload)
    yield put(fetchOneGroupFinished(response))
}

export function* fetchGroupSaga() {
    yield takeLatest(actionKey.GROUP_QUERY, fetchGroups);
    yield takeEvery(actionKey.FETCH_ONE_GROUP, fetchOneGroup);
}