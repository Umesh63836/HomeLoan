import { Component, OnInit } from '@angular/core';
import { UserRegister} from '../Models/UserRegister';
import { Router } from '@angular/router';
import {UserRegisterService} from '../Services/UserRegisterService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerApplicationService } from '../Services/ApplicationService';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  myForm:FormGroup;
  result;
  invalidpn:string=" ";
  invalidem;
  flag:number;
  today = new Date();
  status:boolean=false;
  constructor(private userRegisterService:UserRegisterService,private routes:Router,private cas:CustomerApplicationService) {
    
    
  this.myForm = new FormGroup({
      fn:new FormControl(null,Validators.required),
      mn:new FormControl(null),
      ln:new FormControl(null,Validators.required),
      em:new FormControl(null,Validators.required),
      pn:new FormControl(null,Validators.required),
      pw:new FormControl(null,Validators.required),
      rw:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      
  });

  // if(this.pn.value.length!=10)
  // {this.invalidpn="Please enter correct contact number"}
}

public get fn() {
  return this.myForm.get('fn');
}
public get mn() {
  return this.myForm.get('mn');
}
public get ln() {
  return this.myForm.get('ln');
}
public get em() {
  return this.myForm.get('em');
}
public get pn() {
  return this.myForm.get('pn');
}
public get pw() {
  return this.myForm.get('pw');
}
public get rw() {
  return this.myForm.get('rw');
}
public get dob() {
  return this.myForm.get('dob');
}




getUser(){
  //console.log(this.myForm);
  if(this.pn.value.length!=10)
  {this.invalidpn="Please enter correct contact number";} 
  else
  {
  if(this.myForm.valid && this.pw.value==this.rw.value)
  {
      this.userRegisterService.userRegister.FirstName = this.fn.value;
      this.userRegisterService.userRegister.MiddleName = this.mn.value;
      this.userRegisterService.userRegister.LastName = this.ln.value;
      this.userRegisterService.userRegister.EmailID = this.em.value;
      this.userRegisterService.userRegister.Contact = this.pn.value;
      this.userRegisterService.userRegister.Password = this.pw.value;
      this.userRegisterService.userRegister.DOB = this.dob.value;
      
      // this.cas.age =  this.today.getFullYear() - this.userRegisterService.userRegister.DOB.getFullYear();
      console.log(this.userRegisterService.userRegister);
      this.userRegisterService.registerUser(this.userRegisterService.userRegister).subscribe((data)=>{this.result=data;})
      this.status=true;
      console.log(this.result)
      this.routes.navigate(['/personaldetails']);

  }
  else 
  {
    this.flag=1;
  }
}
}

// register(){
//   this.userRegisterService.registerUser(this.userRegisterService.userRegister).subscribe((data)=>{this.result=data;})
//   this.status=true;
//   this.cas.age =  this.today.getFullYear() - this.userRegisterService.userRegister.DOB.getFullYear();
// }

  ngOnInit(): void {

  }

}
