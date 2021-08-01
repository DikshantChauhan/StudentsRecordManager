export interface User {
    id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    role: "staff" | "admin";
    profile_pic_url: string;
    phone_number:number;
    birth_date:number;
    birth_month:number;
    birth_year:number;
    email:string;
    education:string;
}