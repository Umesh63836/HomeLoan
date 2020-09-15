import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService} from '../Services/adminService';
import {FormGroup,FormControl, FormControlName, FormGroupName} from '@angular/forms';
import { Admin } from '../Models/admin';

@Component({
  selector: 'app-adminchangepassword',
  templateUrl: './adminchangepassword.component.html',
  styleUrls: ['./adminchangepassword.component.css']
})
export class AdminchangepasswordComponent implements OnInit {

  abc:FormGroup;
  result;
  admin:Admin;
  adminId:string;
  email:string;
  passmatch:FormGroup;
  p1:string;
  p2:string;
  res;
  
  
    constructor(private adminser:AdminService) {
  
      this.abc=new FormGroup({
        addid:new FormControl(null),
        addem:new FormControl(null)
    
    
      })
  
  
      this.passmatch=new FormGroup({
        pass1:new FormControl(null),
        pass2:new FormControl(null)
  
      })
      ;
  this.adminId="";
  this.email="";
  this.p1="";
  this.p2="";
  
     }
  
     public get addid(){
      return this.abc.get('addid');
    } 
    
    public get addem(){
      return this.abc.get('addem');
    }
    public get pass1(){
      return this.passmatch.get('pass1');
    }
  
    public get pass2(){
      return this.passmatch.get('pass2');
    }
  
    ngOnInit(): void {
    }
  changePassword()
  {
    this.p1=this.pass1.value;
    this.p2=this.pass2.value;
    console.log(this.p1);
    console.log(this.p2);
  
    
    if(this.p1==this.p2)
    {
      
      this.adminser.changePass(this.addid,this.p2).subscribe((data)=>{
      this.res=data;
      
      console.log(this.res);
    })
  }
  else
  {
    console.log("not matched");
  }
    
  }
  
    changeStatus()
  {
  
    this.adminId=this.addid.value;
    this.email=this.addem.value;
    
    this.adminser.verifyEmail(this.adminId,this.email).subscribe((data)=>{
      this.result=data;
      
    })
    
  }
  
  }
