import {HttpClient,HttpClientModule} from '@angular/common/http';
import {Admin} from '../Models/admin';
import { Injectable } from "@angular/core";
import {Application} from '../Models/appilications';
import {LoanStatus} from '../Models/loanStatus';
import { stringify } from '@angular/compiler/src/util';
import { UrlHandlingStrategy } from '@angular/router';


@Injectable()
export class AdminService{
applications:Application[];
loans:LoanStatus[];
u:string;
admin:Admin;
isloggedin = false;

    constructor(private http:HttpClient)
    {
     this.applications=[];
     this.loans=[];
    }

    public getApplications()
    {
        return this.http.get("http://localhost:63846/api/Admins");
        
    }

    public adminUser(admin:Admin)
    {
        console.log(admin);
     return this.http.post("http://localhost:63846/api/Admins/PostAdmin",admin);
    }

    public showLoan()
    {
        console.log("hihi");
        return this.http.get("http://localhost:63846/api/Admins/getloan");
    }

    public changeLoanStatus(aid:any,status:any)
    {
        
        
       return this.http.get("http://localhost:63846/api/Admins/statuschange?aid="+aid.value+"&status="+status.value);
     
    }


    public verifyEmail(addid:any,email:any)
    {
  
        return this.http.get("http://localhost:63846/api/Admins/PostEmail?ADDID="+addid+"&EMAILID="+email);  

    }

    public changePass(p1:any,p2:any)
    {
       console.log(p1.value);
       console.log("fff")
       console.log(p2);
        return this.http.get("http://localhost:63846/api/Admins/newpass?aid="+p1.value+"&pass="+p2);  

    }

}