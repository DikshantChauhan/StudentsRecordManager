import { schema } from "normalizr"
import { Entity } from "../Components/Models/Entity.model"


export const getItem = (id: number, byIds: { [id: number]: Entity }) =>{
    const item = byIds[id]
    return item
}

export const getItemsArray = (ids: number[], byIds: { [id: number]: Entity }) =>{
    const items = ids.map((id) =>{
        return byIds[id]
    })
    return items
}

export const userSchema = new schema.Entity('users');
export const groupSchema = new schema.Entity('groups', {
    creator: userSchema,
    participants: [userSchema],
    invitedMembers: [userSchema]
});