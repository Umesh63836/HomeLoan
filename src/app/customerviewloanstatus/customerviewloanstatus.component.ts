import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { CustomerService } from '../Services/customerService';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerviewloanstatus',
  templateUrl: './customerviewloanstatus.component.html',
  styleUrls: ['./customerviewloanstatus.component.css']
})
export class CustomerviewloanstatusComponent implements OnInit {

  loanview:FormGroup;
  loanById:any;
  flag;
  flagNo;
  constructor(private customerser:CustomerService,private cookie:CookieService,private routes:Router) {
   

    this.loanview=new FormGroup({
      appid:new FormControl(null,[Validators.required]),
      pno: new FormControl(null,[Validators.required])

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
    return this.loanview.get('appid');
  }
  public get pno(){
    return this.loanview.get('pno');
  }  

  viewLoan()
  {
   
    this.customerser.showLoanStatus(this.appid,this.pno).subscribe((data)=>{
      this.loanById=data;
      this.flag=1;
        this.loanById.forEach(element => {
           this.loanById=element;          
        });
      
    })
  }

  

}
