import { schema } from "normalizr"
import { Entity, EntityState } from "../Components/Models/Entity.model"

export const normalizeMany = (state: EntityState, arr: Entity[]) =>{
    if(arr === []){
        return state
    }

    const normalizedArr = arr.reduce((pre, curr) =>{
        return { ...pre, [curr.id]: curr }
    }, {})

    return { ...state, byIds: {...state.byIds ,...normalizedArr},}
}

export const normalizeOne = (state: EntityState, entity: Entity) =>{
    return { ...state, byIds: {...state.byIds, [entity.id]: entity }}
}

export const user = new schema.Entity('users');
export const group = new schema.Entity('groups', {
    creator: user,
    participants: [user],
    invitedMembers: [user]
});