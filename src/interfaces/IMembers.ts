export interface IMember{
    id?:string;
    name:string;
    telephone:string;
    email:string;
    path:string;
    status?:boolean;
    id_file_google:string
}
export interface IMembers{
   members:Array<IMember>
}

