export interface IMember{
    id?:string;
    name:string;
    telephone:string;
    email:string;
    path:string;
    status?:boolean
}
export interface IMembers{
   members:Array<IMember>
}

