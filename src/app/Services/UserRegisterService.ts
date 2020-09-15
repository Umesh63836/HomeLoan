import {UserRegister} from "../Models/UserRegister";
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';

@Injectable()
export class UserRegisterService{
    userRegister:UserRegister;
    constructor(private http:HttpClient)
    {
        this.userRegister = new UserRegister();
     }
    public registerUser(userRegister:UserRegister){
        return this.http.post("http://localhost:63846/api/Customers",userRegister);   
    }
}