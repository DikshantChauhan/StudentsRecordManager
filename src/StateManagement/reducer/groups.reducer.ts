import { AnyAction, Reducer } from "redux";
import { EntityState } from "../../Components/Models/Entity";
import { Group } from "../../Components/Models/Group";
import { GROUP_FETCHED, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    Group_BY_ID } from "../actionKey";
import { normalizeMany } from "../helperFunctions";

export interface GroupsState extends EntityState<Group>{
    currentQuery: string;
    groupsIdsByQuery: { [query: string]: number[] }
    groupsByQueryLoading: boolean
}

const initialValue: GroupsState = {
    currentQuery: "",
    byIds: {},
    groupsIdsByQuery: {},
    searchedId: undefined,
    groupsByQueryLoading: false,
    loading: false,
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case GROUPS_CURRENT_QUERY:
                return {...currentState, currentQuery: dispatchedAction.payload, groupsByQueryLoading: true};
            
            case GROUPS_BY_QUERY_FETCHED:
                const groups: Group[] = dispatchedAction.payload;

                const newState = normalizeMany(currentState ,groups) as GroupsState
                const ids = groups.map((item) => item.id);

                return {
                    ...newState,
                    groupsIdsByQuery: {...currentState.groupsIdsByQuery, [currentState.currentQuery]: ids },
                    groupsByQueryLoading: false
                };

            case Group_BY_ID:
                return { ...currentState, searchedId: dispatchedAction.payload }

            case GROUP_FETCHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined) {
                    return currentState
                }
                return { ...currentState, byIds: {...currentState.byIds, [group.id]: group} }
            
            default:
                return currentState;
        }
    }