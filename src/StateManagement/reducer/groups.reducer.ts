import { AnyAction, Reducer } from "redux";
import { EntityState, entityStateInitialValue } from "../../Components/Models/Entity.model";
import { Group } from "../../Components/Models/Group.model";
import { GROUP_FETCHED, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    SEARCHED_GROUP_ID, 
    GROUP_LOADING,
    GROUP_FETCHING_FAIL,
    GROUP_INDEX} from "../actionKeys";

export interface GroupsState extends EntityState<Group>{
    currentQuery: string;
    groupsIdsByQuery: { [query: string]: number[] }
    groupsByQueryLoading: boolean
    groupFetchingFail?: string
    groupsCreaters: { [id: number]: number }
    participants: { [id: number]: number[] },
    invitedMembers: { [id: number]: number[] },
    index?: number,
}

const initialValue: GroupsState = {
    ...entityStateInitialValue,
    currentQuery: "",
    groupsIdsByQuery: {},
    groupsByQueryLoading: false,
    groupFetchingFail: undefined,
    groupsCreaters: {},
    participants: {},
    invitedMembers: {},
    index: undefined,
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case GROUPS_CURRENT_QUERY:
                return {...currentState, currentQuery: dispatchedAction.payload, groupsByQueryLoading: true};
            
            case GROUPS_BY_QUERY_FETCHED:
                const normalizedGroups = dispatchedAction.payload as typeof currentState.byIds ;
                const ids = Object.keys(normalizedGroups).map((i) => (+i))

                return {
                    ...currentState,
                    byIds: { ...currentState.byIds, ...normalizedGroups },
                    groupsIdsByQuery: {...currentState.groupsIdsByQuery, [currentState.currentQuery]: ids },
                    groupsByQueryLoading: false
                };

            case SEARCHED_GROUP_ID:{
                const id = dispatchedAction.payload
                const currentQuery = currentState.currentQuery
                const ids = currentState.groupsIdsByQuery[currentQuery]
                let currentIndex
                if(ids !== undefined){
                    for(let i = 0; i < ids.length; i++){
                        if(id == ids[i]){
                            currentIndex = i
                        }
                    }
                }
                return { ...currentState, searchedId: id, index: currentIndex }
            }

            case GROUP_INDEX:{
                return { ...currentState, index: dispatchedAction.payload }
            }

            case GROUP_FETCHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined) {
                    return currentState
                }

                return { 
                    ...currentState, 
                    byIds: { 
                        ...currentState.byIds, 
                        [group.id]: group 
                        },
                    participants: { 
                        ...currentState.participants, 
                        [group.id]: group.participants 
                        },
                    invitedMembers: { 
                        ...currentState.participants, 
                        [group.id]: group.invitedMembers 
                        },
                    groupsCreaters: {
                        ...currentState.groupsCreaters,
                        [group.id]: group.creator
                    }
                }
            
            case GROUP_LOADING:
                return { ...currentState, loadingOne: dispatchedAction.payload }
            
            case GROUP_FETCHING_FAIL:
                return { ...currentState, groupFetchingFail: dispatchedAction.payload }
            
                default:
                return currentState;
        }
    }