import axios, { Canceler } from "axios"
import { groupsAction } from "../actions/groups.bindAction"
import {fetchGroups as fetchGroupsAPI} from "../Components/Api/Groups"
import { groupQueryMapSelector, groupsFetchingSelector } from "../selector/groups.selector"
import { store } from "../store"

let canceler: Canceler | undefined

export const fetchGroups = (query: string) =>{
    const currentQuery = query
    groupsAction.query(currentQuery)

    canceler && canceler();

    const { cancel, token } = axios.CancelToken.source()

    canceler = cancel

    groupsAction.groupsFetching(true)
    fetchGroupsAPI({ status: "all-groups", query: query  }, token)
    .then((groups) =>{
        groups && groupsAction.queryFinished(groups)
        groupsAction.groupsFetching(false)
        canceler = undefined
    })    
}


//if req in progress, dont resend the same req
    /* groupsAction.query(query)

    const isFetching = groupsFetchingSelector(store.getState())
    if(isFetching){
        return
    }
    groupsAction.groupsFetching(true)
    fetchGroupsAPI({ status: "all-groups", query: query  })
    .then((groups) =>{
        groupsAction.queryFinished(groups)
        groupsAction.groupsFetching(false)
    }) */



    
    //if data exist, dont send req.

    /* groupsAction.query(query)

    const queryMap = groupQueryMapSelector(store.getState())

    if(queryMap[query] === undefined){
        groupsAction.groupsFetching(true)
        fetchGroupsAPI({ status: "all-groups", query: query  })
        .then((groups) =>{
            groupsAction.queryFinished(groups)
            groupsAction.groupsFetching(false)
        })
    } */