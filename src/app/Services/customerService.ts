import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Customer } from '../Models/customer';
import { Injectable } from "@angular/core";
import {Application} from '../Models/appilications';
import {LoanStatus} from '../Models/loanStatus';
import { stringify } from '@angular/compiler/src/util';
import { UrlHandlingStrategy } from '@angular/router';
import {LoanAccount} from '../Models/loanAccount';


@Injectable()
export class CustomerService{
applications:Application[];
loans:LoanStatus[];
u:string;
customer:Customer;
applicationById:Application[];
accountById:LoanAccount;

    

constructor(private http:HttpClient)
{
 this.applications=[];
 this.loans=[];
 this.applicationById=[];
}

 public getCustomerApplicationById(aid:any)
 {
     console.log(aid.value);
     console.log("kk");
     return this.http.get("http://localhost:63846/api/Customers/GetAppById?id="+aid.value);
    
 }
 public getCustomerAccountById(appid:any)
 {
     
     console.log(appid.value)
     console.log("kk");
     return this.http.get("http://localhost:63846/api/Customers/ViewAccountById?appid="+appid.value+"&acc="+0);
    
 }



public customerUser(customer:Customer)
{
    console.log(customer);
    return this.http.get("http://localhost:63846/api/Customers/PostCustomer?mail="+customer.email+"&pass="+customer.password);

}

public showLoanStatus(appid:any,pno:any)
 {
     console.log("hihi");
     console.log(appid.value);
     console.log(pno.value);
     return this.http.get("http://localhost:63846/api/Customers/ViewLoanById?id="+appid.value+"&contact="+pno.value);
 }




public verifyContact(addid:any,email:any)
{
    console.log("ddr");
    console.log(addid);
    console.log(email);

    return this.http.get("http://localhost:63846/api/Customers/PostContact?email="+addid+"&contact="+email);  

}

public changePass(p1:any,p2:any)
{
   console.log(p1.value);
   console.log("fff")
   console.log(p2);
    return this.http.get("http://localhost:63846/api/Customers/newpassC?aid="+p1.value+"&pass="+p2);  

}

}