import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerService} from '../Services/customerService';
import {FormGroup,FormControl, FormControlName, FormGroupName,Validators} from '@angular/forms';
import { Customer } from '../Models/customer';


@Component({
  selector: 'app-customerchangepassword',
  templateUrl: './customerchangepassword.component.html',
  styleUrls: ['./customerchangepassword.component.css']
})
export class CustomerchangepasswordComponent implements OnInit {

cusverify:FormGroup;
result;
customer:Customer;
adminId:string;
email:string;
Cpassmatch:FormGroup;
p1:string;
p2:string;
res;


  constructor(private customerser:CustomerService,private routes:Router) {

    this.cusverify=new FormGroup({
      cusid:new FormControl(null,[Validators.required]),
      cusem:new FormControl(null,[Validators.required])
    })


    this.Cpassmatch=new FormGroup({
      pass1:new FormControl(null,[Validators.required]),
      pass2:new FormControl(null,[Validators.required])

    })
    ;


   }

   public get cusid(){
    return this.cusverify.get('cusid');
  } 
  
  public get cusem(){
    return this.cusverify.get('cusem');
  }
  public get pass1(){
    return this.Cpassmatch.get('pass1');
  }

  public get pass2(){
    return this.Cpassmatch.get('pass2');
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
      
      this.customerser.changePass(this.cusid,this.p2).subscribe((data)=>{
      this.res=data;
      // if(this.res==1)
      // {
      //   console.log("de");
      //  this.routes.navigate(['/customerafterlogin']);
      // }
      console.log(this.res);
    })
  }
  else
  {
    console.log("not matched");
  }
    
  }
  
    verifyContact()
  {
  
    this.adminId=this.cusid.value;
    this.email=this.cusem.value;
    
    this.customerser.verifyContact(this.adminId,this.email).subscribe((data)=>{
      this.result=data;
      console.log(this.result);
      
    })
    
  }
}