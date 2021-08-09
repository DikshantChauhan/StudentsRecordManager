import { AnyAction, Reducer } from "redux";
import { EntityState } from "../Components/Models/Entity";
import { Group } from "../Components/Models/Group";
import { actionKey } from "../store";
import { normalizeMany } from "./helperFunctions";

export interface GroupsState extends EntityState<Group>{
    query: string;
    queryMap: { [query: string]: number[] }
    searchedId?: number
}

const initialValue: GroupsState = {
    query: "",
    byIds: {},
    queryMap: {},
    searchedId: undefined,
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case actionKey.GROUP_QUERY:
                return {...currentState, query: dispatchedAction.payload};
            
            case actionKey.GROUPS_QUERY_FINISHED:
                const groups: Group[] = dispatchedAction.payload;

                const newState = normalizeMany(currentState ,groups) as GroupsState
                const ids = groups.map((item) => item.id);

                return {
                    ...newState,
                    queryMap: {...currentState.queryMap, [currentState.query]: ids}};

            case actionKey.Group_SEARCH_BY_ID:
                return { ...currentState, searchedId: dispatchedAction.payload }

            case actionKey.GROUP_SEARCH_BY_ID_FINISHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined) {
                    return currentState
                }
                return { ...currentState, byIds: {...currentState.byIds, [group.id]: group} }

            default:
                return currentState;
        }
    }