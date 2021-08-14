import { Entity } from "./Entity.model";

export interface User extends Entity{
    first_name: string,
    middle_name: string,
    last_name: string,
    role: "staff" | "admin";
    profile_pic_url: string;
    phone_number:string;
    birth_date:string;
    birth_month:string;
    birth_year:string;
    email:string;
    education:string;
}