import User from "./user";

export default interface Comment{
    _id: string;
    title:string;
    user:User;
    parentId:string|null;
    created_At:string
}