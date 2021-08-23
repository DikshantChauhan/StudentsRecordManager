import { AnyAction, Reducer } from "redux";
import { EntityState, entityStateInitialValue, NormalizrData } from "../../Components/Models/Entity.model";
import { Group } from "../../Components/Models/Group.model";
import { GROUP_FETCHED, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    SEARCHED_GROUP_ID, 
    GROUP_LOADING,
    GROUP_FETCH_ERROR,
    GROUP_INDEX,
    GROUPS_FETCH_ERROR,
    GROUPS_BY_QUERY_LOADING} from "../actionKeys";

export interface GroupsState extends EntityState<Group>{
    currentQuery: string;
    groupsIdsByQuery: { [query: string]: number[] }
    groupsByQueryLoading: boolean
    groupFetchError?: string
    groupsCreaters: { [id: number]: number }
    participants: { [id: number]: number[] },
    invitedMembers: { [id: number]: number[] },
    index?: number,
    groupsFetchError?: string
}

const initialValue: GroupsState = {
    ...entityStateInitialValue,
    currentQuery: "",
    groupsIdsByQuery: {},
    groupsByQueryLoading: false,
    groupFetchError: undefined,
    groupsCreaters: {},
    participants: {},
    invitedMembers: {},
    index: undefined,
    groupsFetchError: undefined
}

export const groupsReducer: Reducer<GroupsState> = 
    (currentState = initialValue, dispatchedAction: AnyAction) =>{
        switch(dispatchedAction.type){

            case GROUPS_CURRENT_QUERY:
                return {...currentState, currentQuery: dispatchedAction.payload };
            
            case GROUPS_BY_QUERY_FETCHED:
                const normalizedData = dispatchedAction.payload as NormalizrData ;
                const normalizedGroups = normalizedData.entities?.groups as typeof currentState.byIds
                const ids = normalizedData.result as number[]

                const creaters = ids.reduce((pre, curr) =>{
                    const group = normalizedGroups[curr]
                    const creater = group.creator
                    if(creater === null){
                        return { ...pre }
                    }

                    return { ...pre, [curr]: creater }
                }, {})

                const invitedMembers = ids.reduce((pre, curr) =>{
                    const group = normalizedGroups[curr]
                    const invitedMembers = group.invitedMembers

                    return { ...pre, [curr]: invitedMembers }
                }, {})

                const participants = ids.reduce((pre, curr) =>{
                    const group = normalizedGroups[curr]
                    const participants = group.participants

                    return { ...pre, [curr]: participants }
                }, {})

                return {
                    ...currentState,
                    byIds: { ...currentState.byIds, ...normalizedGroups },
                    groupsIdsByQuery: {...currentState.groupsIdsByQuery, [currentState.currentQuery]: ids },
                    groupsCreaters: { ...currentState.groupsCreaters, ...creaters },
                    invitedMembers: { ...currentState.invitedMembers, ...invitedMembers },
                    participants: { ...currentState.participants, ...participants },
                };

            case GROUPS_BY_QUERY_LOADING:
                return { ...currentState, groupsByQueryLoading: dispatchedAction.payload }

            case SEARCHED_GROUP_ID:{
                const id = dispatchedAction.payload
                const currentQuery = currentState.currentQuery
                const ids = currentState.groupsIdsByQuery[currentQuery]
                let currentIndex
                if(ids !== undefined){
                    for(let i = 0; i < ids.length; i++){
                        if(id == ids[i]){ //eslint-disable-line
                            currentIndex = i
                        }
                    }
                }
                return { ...currentState, searchedId: id, index: currentIndex }
            }

            case GROUP_INDEX:{
                return { ...currentState, index: dispatchedAction.payload }
            }

            case GROUP_FETCHED:{
                const normalizedData = dispatchedAction.payload as NormalizrData
                const groupId = normalizedData.result as any
                const normalizedGroup = normalizedData.entities?.groups[groupId]

                return { 
                    ...currentState, 
                    byIds: { 
                        ...currentState.byIds, 
                        [groupId]: normalizedGroup, 
                        },
                    participants: { 
                        ...currentState.participants, 
                        [groupId]: normalizedGroup.participants 
                        },
                    invitedMembers: { 
                        ...currentState.participants, 
                        [groupId]: normalizedGroup.invitedMembers 
                        },
                    groupsCreaters: {
                        ...currentState.groupsCreaters,
                        [groupId]: normalizedGroup.creator
                    }
                }
            }
            
            case GROUP_LOADING:
                return { ...currentState, loadingOne: dispatchedAction.payload }
            
            case GROUP_FETCH_ERROR:
                return { ...currentState, groupFetchError: dispatchedAction.payload }
            
            case GROUPS_FETCH_ERROR:
                return { ...currentState, groupsFetchError: dispatchedAction.payload }
            
                default:
                return currentState;
        }
    }