import { AnyAction, Reducer } from "redux";
import { Group } from "../Components/Models/Group";
import { actionKey } from "../store";

export interface GroupsState {
    query: string;
    groups: { [id: number]: Group }
    queryMap: { [query: string]: number[] }
}

const initialValue: GroupsState = {
    query: "",
    groups: {},
    queryMap: {},
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case actionKey.GROUP_QUERY:
                return {...currentState, query: dispatchedAction.payload};
            
            case actionKey.GROUPS_QUERY_FINISHED:
                const groups: Group[] = dispatchedAction.payload;
                const ids = groups.map((item) => item.id);
                const groupsNormalized = groups.reduce((pre, curr) =>{
                    return {...pre, [curr.id]: curr}
                }, {});

                return {
                    ...currentState, 
                    groups: {...currentState.groups, ...groupsNormalized}, 
                    queryMap: {...currentState.queryMap, [currentState.query]: ids}};

            default:
                return currentState;
        }
    }