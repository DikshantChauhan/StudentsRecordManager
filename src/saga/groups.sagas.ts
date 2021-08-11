import { AnyAction } from "redux";
import { takeEvery, put, call } from "redux-saga/effects";
import { groupQueryFinished } from "../actions/groups.action";
import { fetchGroups as fetchGroupsAPI } from "../Components/Api/Groups";
import { actionKey } from "../store";

function* fetchGroups(action: AnyAction): Generator<any> {
    console.log("Query Changed!");
    const groups: any = yield call(fetchGroupsAPI, {
        query: action.payload,
        status: "all-groups",
    });
    yield put(groupQueryFinished(groups));
}

export function* fetchGroupSaga() {
    console.log("Middle-wale saga called");
    yield takeEvery(actionKey.GROUP_QUERY, fetchGroups);
}