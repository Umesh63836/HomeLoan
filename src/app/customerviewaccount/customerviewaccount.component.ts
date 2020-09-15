import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customerService';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup ,FormControl,Validators, FormControlName} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-customerviewaccount',
  templateUrl: './customerviewaccount.component.html',
  styleUrls: ['./customerviewaccount.component.css']
})
export class CustomerviewaccountComponent implements OnInit {
  accountview:FormGroup
  accountById:any
  flag;
  
  constructor(private routes:Router,private customerser:CustomerService,private cookie:CookieService) {

    this.accountview=new FormGroup({
      
      appid: new FormControl(null,[Validators.required])

    })
   }

  ngOnInit(): void {
  }

  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/customerlogin']);
  }
 
  public get appid(){
    return this.accountview.get('appid');
  }  

  viewAccount()
  {
    console.log("start");
    this.customerser.getCustomerAccountById(this.appid).subscribe((data)=>{
      this.accountById=data;
      if(this.accountById!=null)
      {
            this.flag=1;
      }
      if(this.accountById==null)
      {
        this.flag=0;
      }
      console.log(this.accountById);
      console.log("end");
    })
  }

}