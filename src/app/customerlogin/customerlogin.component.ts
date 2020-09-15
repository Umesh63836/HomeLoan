import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customerService';
import {Customer} from '../Models/customer';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  result;
  customer:Customer;

  constructor(private customerser:CustomerService,private cookieService: CookieService,private routes:Router) {
    this.customer=new Customer();
   }

  checkLogin()
  {
    console.log("start");
    this.cookieService.set('username',this.customer.email);
    console.log(this.cookieService.get('username')); 
    this.customerser.customerUser(this.customer).subscribe((data)=>{
    this.result=data;
    
    if(this.result==1)
      {
       
       this.routes.navigate(['/customerafterlogin']);
      }
    console.log(this.result); 
    console.log("end");
    
    })
   
    console.log(this.customer);
  }

  ngOnInit(): void {
  }

}