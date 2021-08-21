import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { groupByIdFetchedAction, groupFetchingFailAction, groupLoadingAction, groupsByQueryFetchedAction } from "../actions/groups.action";
import { groupFetchAPI, groupsFetchAPI } from "../../Components/Api/Groups.api";
import { GroupResponse } from "../../Components/Models/Group.model";
import { GROUP_FETCHING, GROUPS_CURRENT_QUERY } from "../actionKeys";
import { usersFetchedAction } from "../actions/users.action";
import { normalize } from "normalizr";
import { groupSchema } from "../helperFunctions";

function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(1000)

    const rawResponse: any = yield call(groupsFetchAPI, {
        query: action.payload,
        status: "all-groups",
    });

    const response: GroupResponse[] = rawResponse.data.data
    const normalizedData = normalize(response, [groupSchema])
    const users = Object.values(normalizedData.entities.users!)

    yield put(usersFetchedAction(users))

    yield put(groupsByQueryFetchedAction(normalizedData))
}

function* groupFetching(action: AnyAction) {
    yield put(groupLoadingAction(true))
    try{
        yield put(groupFetchingFailAction(undefined))
        const response: GroupResponse = yield call(groupFetchAPI, action.payload)

        const normalizedData = normalize(response, groupSchema)

        const creator = response.creator
        const invitedMembers = response.invitedMembers
        const participants = response.participants
        const users = [ creator, ...invitedMembers, ...participants ]

        yield put(groupByIdFetchedAction(normalizedData))
        yield put(usersFetchedAction(users))
        
        yield put(groupLoadingAction(false))
    }
    catch (e) {
        yield put(groupFetchingFailAction(e.response?.data?.message || "Something went Wrong"))
        yield put(groupLoadingAction(false))
    }
}

export function* groupsSaga() {
    yield takeLatest(GROUPS_CURRENT_QUERY, fetchGroups);
    yield takeEvery(GROUP_FETCHING, groupFetching);
}