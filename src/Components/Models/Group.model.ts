import { User } from "./User.model";
 import { Entity } from "./Entity.model";

export interface Group extends Entity{
    name: string;
    is_private: boolean;
    description: string;
    introductory_message?: string;
    group_image_url: null | string;
    join_code: string;
    created_at: Date;
    updated_at: Date;
    chatCount: number;
    state: State;
    creator: User;
    issues: any[];
    invitedMembers: User[];
    participants: User[];
    advocatePage?: string;
}

interface State{
    id: number
    title: string;
    state_code: string;
    created_at: Date;
    updated_at: Date;
}