export interface Entity{
    id: number
}

export interface EntityState<T extends Entity = Entity>{
    byIds: {
        [id: number]: T
    },
}