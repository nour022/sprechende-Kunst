export interface IUsers {
    user_ID?: string;
    first_name: string;
    last_name: string;
    image?: any;
    email: string;
    auth_token?: string;
    r_Password_token?: string;
    password?: string;
    role: string;
    created_Date: Date;
    artistProfile_ID?: string; // IKunstschaffende -> person_ID 
}
