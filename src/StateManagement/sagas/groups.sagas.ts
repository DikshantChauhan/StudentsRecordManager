import { AnyAction } from "redux";
import { takeEvery, put, call, takeLatest, delay } from "redux-saga/effects";
import { groupByIdFetchedAction, groupFetchingFailAction, groupLoadingAction, groupsByQueryFetchedAction } from "../actions/groups.action";
import { groupFetchAPI, groupsFetchAPI } from "../../Components/Api/Groups.api";
import { Group, GroupResponse } from "../../Components/Models/Group.model";
import { GROUP_FETCHING, GROUPS_CURRENT_QUERY } from "../actionKeys";
import { usersFetchedAction } from "../actions/users.action";
import { User } from "../../Components/Models/User.model";

function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(1000)
    const rawResponse: any = yield call(groupsFetchAPI, {
        query: action.payload,
        status: "all-groups",
    });
    const response: GroupResponse[] = rawResponse.data.data
    const users2d = response.map((user) =>{
        const creator = user.creator
        const invitedMembers = user.invitedMembers
        const participants = user.participants
        const u = [ creator, ...invitedMembers, ...participants ]
        return u
    })

    let users: User[] = [];
    for(let i = 0; i < users2d.length; i++){
        users = [...users, ...users2d[i]]
    }

    let filteredUsers: User[] = [];
    for(let i = 0; i < users.length; i++){
        if(users[i] !== null){
            filteredUsers = [...filteredUsers, users[i]]
        }
    }
    yield put(usersFetchedAction(filteredUsers))
    
    const normalizedGroups = response.reduce((pre, curr) =>{
        let creatorId;
        if(curr.creator === (undefined || null)){
            creatorId = undefined
        }else{
            creatorId = curr.creator.id
        }
        const group = { 
            ...curr, 
            creator: creatorId,
            invitedMembers: curr.invitedMembers.map((item) =>{
                return item.id
            }),
            participants: curr.participants.map((item) =>{
                return item.id
            }),
        }

        return { ...pre, [group.id]: group }
    }, {})
    yield put(groupsByQueryFetchedAction(normalizedGroups as any))
}

function* groupFetching(action: AnyAction) {
    yield put(groupLoadingAction(true))
    try{
        yield put(groupFetchingFailAction(undefined))
        const response: GroupResponse = yield call(groupFetchAPI, action.payload)

        const newResponse = { ...response, 
            creator: response.creator.id,
            invitedMembers: response.invitedMembers.map((item) =>{
                return item.id
            }),
            participants: response.participants.map((item) =>{
                return item.id
            }),
         }

        const creator = response.creator
        const invitedMembers = response.invitedMembers
        const participants = response.participants
        const users = [ creator, ...invitedMembers, ...participants ]

        yield put(groupByIdFetchedAction(newResponse))
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