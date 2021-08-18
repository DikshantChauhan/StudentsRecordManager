import { all, fork } from "redux-saga/effects";
import { meSaga } from "./auth.sagas";
import { groupsSaga } from "./groups.sagas";
import { usersSaga } from "./users.sagas";

export function* rootSaga() {
    yield all([
        fork(meSaga),
        fork(groupsSaga),
        fork(usersSaga),
    ])
}