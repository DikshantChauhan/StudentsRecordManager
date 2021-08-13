import { Entity, EntityState } from "../../Components/Models/Entity"

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