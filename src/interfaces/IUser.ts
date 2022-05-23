

export interface IUser {
   id:string;
   login:string;
   password:string;
   status:boolean;
   member_id:string;
} 

export interface IUsers {
    users: Array<IUser>
}