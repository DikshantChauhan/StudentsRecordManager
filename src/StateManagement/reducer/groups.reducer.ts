import { AnyAction, Reducer } from "redux";
import { EntityState } from "../../Components/Models/Entity";
import { Group } from "../../Components/Models/Group";
import { GROUP_FETCHED, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    Group_BY_ID } from "../actionKey";
import { normalizeMany } from "./helperFunctions";

export interface GroupsState extends EntityState<Group>{
    query: string;
    queryMap: { [query: string]: number[] }
    searchedId?: number
    /* loading: { [query: string]: boolean } */
    loading: boolean
}

const initialValue: GroupsState = {
    query: "",
    byIds: {},
    queryMap: {},
    searchedId: undefined,
    //multiple reqs..
    /* loading: {}, */
    loading: false,
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case GROUPS_CURRENT_QUERY:
                return {...currentState, query: dispatchedAction.payload, loading: true};
            
            case GROUPS_BY_QUERY_FETCHED:
                const groups: Group[] = dispatchedAction.payload;

                const newState = normalizeMany(currentState ,groups) as GroupsState
                const ids = groups.map((item) => item.id);

                return {
                    ...newState,
                    queryMap: {...currentState.queryMap, [currentState.query]: ids },
                    loading: false
                };

            case Group_BY_ID:
                return { ...currentState, searchedId: dispatchedAction.payload }

            case GROUP_FETCHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined) {
                    return currentState
                }
                return { ...currentState, byIds: {...currentState.byIds, [group.id]: group} }

            /* case actionKey.GROUPS_LOADING:
                return { ...currentState, loading: dispatchedAction.payload } */
                //multiple reqs..
               /*  return { 
                    ...currentState, 
                    loading: { 
                        ...currentState.loading, 
                        [currentState.query]: dispatchedAction.payload,
                        },
                    } */
            
                default:
                return currentState;
        }
    }