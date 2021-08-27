import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { groupByIdAction, groupByIdFetchedAction, groupFetchErrorAction, groupLoadingAction, groupsByQueryFetchedAction, groupsByQueryLoadingAction, groupsFetchErrorAction } from "../actions/groups.action";
import { groupFetchAPI, groupsFetchAPI } from "../../Components/Api/Groups.api";
import { GroupResponse } from "../../Components/Models/Group.model";
import { GROUP_FETCHING, GROUPS_CURRENT_QUERY } from "../actionKeys";
import { usersFetchedAction } from "../actions/users.action";
import { normalize } from "normalizr";
import { groupSchema } from "../helperFunctions";

function* fetchGroups(action: AnyAction): Generator<any> {
    try{
        yield put(groupsFetchErrorAction(undefined))
        yield put(groupsByQueryLoadingAction(true))
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
        yield put(groupsByQueryLoadingAction(false))
    }
    catch (e){
        console.log(e)
        yield put(groupsByQueryLoadingAction(false))
        yield put(groupsFetchErrorAction(e.response?.data?.message || "Unable to find group"))
    }
}

export function* groupFetchingSaga(match: any) {
    const id: any = +(match.params.id)
    yield put(groupLoadingAction(true))
    try{
        yield put(groupFetchErrorAction(undefined))
        yield put(groupByIdAction(id))
        const response: GroupResponse = yield call(groupFetchAPI, id)

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
        console.log(e)
        yield put(groupFetchErrorAction(e.response?.data?.message || "Something went Wrong"))
        yield put(groupLoadingAction(false))
    }
}

export function* groupsSaga() {
    yield takeLatest(GROUPS_CURRENT_QUERY, fetchGroups);
    yield takeEvery(GROUP_FETCHING, groupFetchingSaga);
}