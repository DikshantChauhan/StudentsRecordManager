import { matchPath } from "react-router-dom";
import { AnyAction } from "redux";
import { call, takeEvery } from "redux-saga/effects";
import { groupFetchingSaga } from "./groups.sagas";

const mapping: { [key: string]: any } = {
    "/groups/:id": groupFetchingSaga,
}

export function* handelLocationsaga(action: AnyAction): Generator<any, any, any>{
    const pathName = action.payload.location.pathname
    let match: any
    for(let key in mapping){
        match = matchPath(pathName, { path: key })
        if(match !== (undefined || null)){
            yield call(mapping[key], match)
        }
    }
}

export function* watchLocationChangeSaga(){
    yield takeEvery("@@router/LOCATION_CHANGE", handelLocationsaga)
}