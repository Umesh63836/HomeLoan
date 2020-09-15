import { Component, OnInit } from '@angular/core';
import {LoanStatus} from '../Models/loanStatus';
import { Router } from '@angular/router';


import {CookieService} from 'ngx-cookie-service';
import {AdminService} from '../Services/adminService';
import {FormGroup,FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-adminshowloan',
  templateUrl: './adminshowloan.component.html',
  styleUrls: ['./adminshowloan.component.css']
})
export class AdminshowloanComponent implements OnInit {

  loans;
  
  abcd:FormGroup;
  result;
  allStatus:string[];
  
  constructor(private adminser :AdminService,private routes:Router,private cookie:CookieService) { 
  
  this.allStatus=["Form Submitted","Sent for Final Approval","Accepted","Rejected"];
  
    this.abcd=new FormGroup({
      Cstatus:new FormControl(null),
      appid:new FormControl(null)
  
  
    });
  }
  public get Cstatus(){
    return this.abcd.get('Cstatus');
  } 
  
  public get appid(){
    return this.abcd.get('appid');
  }
  changeStatus()
  {
    this.adminser.changeLoanStatus(this.appid,this.Cstatus).subscribe((data)=>{
      this.result=data;
      console.log(this.result);
    })
    
  }
  
    fetchLoanStatus(){
     
      this.adminser.showLoan().subscribe((data)=>{
      this.loans=data;
      console.log(this.loans);
      })
    }
    ngOnInit(): void {
    }

    logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/adminlogin']);
  }
  
  }
