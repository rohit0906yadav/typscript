import { IUser } from "../modals/IUser";
export class UserService{
    private static users: IUser[]=[
        {sno :1, name:"Naman", age:23}, 
            {sno :2, name:"aman", age:22},
            {sno :3, name:"vijay", age:20}
    ]
    public static getAllUsers(){
        return this.users
    }
}