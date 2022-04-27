

export interface IUser {
   id:string;
   name:string; 
   login:string;
   password:string;
   status:boolean;
} 

export interface IUsers {
    users: Array<IUser>
}