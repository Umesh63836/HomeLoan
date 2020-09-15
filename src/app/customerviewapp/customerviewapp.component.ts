import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customerService';
import { Application } from '../Models/appilications';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-customerviewapp',
  templateUrl: './customerviewapp.component.html',
  styleUrls: ['./customerviewapp.component.css']
})
export class CustomerviewappComponent implements OnInit {
  customerapp:FormGroup;
  applicationid:string;
  applicationById;
  flag;
  constructor(private customerser:CustomerService,private cookie:CookieService,private routes:Router) { 

    
    this.customerapp=new FormGroup({
      appid:new FormControl(null,[Validators.required])
     
    })

  }
  public get appid(){
    return this.customerapp.get('appid');
  } 

  ngOnInit(): void {
  }
  
  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/customerlogin']);
  }

  fetchApplications(){
    console.log("start");
    this.applicationid=this.appid.value;
    this.customerser.getCustomerApplicationById(this.appid).subscribe((data)=>{
      this.applicationById=data;
      if(this.applicationById!=null)
      {
            this.flag=1;
      }
      console.log(this.applicationById);
      console.log("end");
    })
  }


}

