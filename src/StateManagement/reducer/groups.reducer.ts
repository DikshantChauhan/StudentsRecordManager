import { AnyAction, Reducer } from "redux";
import { EntityState } from "../../Components/Models/Entity.model";
import { Group } from "../../Components/Models/Group.model";
import { GROUP_FETCHED, 
    GROUPS_BY_QUERY_FETCHED, 
    GROUPS_CURRENT_QUERY, 
    SEARCHED_GROUP_ID, 
    GROUP_LOADING,
    GROUP_FETCHING_FAIL} from "../actionKeys";
import { normalizeMany } from "../helperFunctions";

export interface GroupsState extends EntityState<Group>{
    currentQuery: string;
    groupsIdsByQuery: { [query: string]: number[] }
    groupsByQueryLoading: boolean
    groupFetchingFail?: string
    groupsCreaters: { [id: number]: number }
    groupsMembers: { [gId: number]: number[] }
}

const initialValue: GroupsState = {
    currentQuery: "",
    byIds: {},
    groupsIdsByQuery: {},
    searchedId: undefined,
    groupsByQueryLoading: false,
    loading: false,
    groupFetchingFail: undefined,
    groupsCreaters: {},
    groupsMembers: {},
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

            case SEARCHED_GROUP_ID:
                return { ...currentState, searchedId: dispatchedAction.payload }

            case GROUP_FETCHED:
                const group: Group = dispatchedAction.payload
                if(group === undefined) {
                    return currentState
                }
                const groupId = group.id
                const createrId = group.creator.id
                const participants = group.participants
                const invitedMembers = group.invitedMembers
                const members = [...participants, ...invitedMembers]
                const membersIds = members.map((user) =>{
                    return user.id
                })

                return { ...currentState, 
                    byIds: { ...currentState.byIds, [group.id]: group },
                    groupsCreaters: { ...currentState.groupsCreaters, [groupId]: createrId },
                    groupsMembers: { ...currentState.groupsMembers, [groupId]: membersIds }
                }
            
            case GROUP_LOADING:
                return { ...currentState, loading: dispatchedAction.payload }
            
            case GROUP_FETCHING_FAIL:
                return { ...currentState, groupFetchingFail: dispatchedAction.payload }
            
                default:
                return currentState;
        }
    }