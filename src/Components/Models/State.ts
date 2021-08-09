import { Entity } from "./Entity";

export interface State extends Entity{
    title: string;
    state_code: string;
    created_at: Date;
    updated_at: Date;
}