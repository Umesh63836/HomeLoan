import {LoanAccount} from "./LoanAccount";
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core'

@Injectable()
export class AccountService{
    constructor(private http:HttpClient)
    { }
    public fetchAccount(appid:string){
        return this.http.get("http://localhost:/api/LoanAccounts/"+appid);
    }
}