import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { CustomerApplicationService } from '../Services/ApplicationService';
import {CustomerApplication} from '../Models/Application';
import {UserRegister} from '../Models/UserRegister';
import { Router } from '@angular/router';
import { UserRegisterService } from '../Services/UserRegisterService';



@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  invalidaadhar:string;
  invalidpan:string;
  flag:number;
  personalForm:FormGroup;
  // emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  valid:boolean;
  
 userRegister:UserRegister;
  constructor(private customerApplicationService:CustomerApplicationService,private routes:Router,private userRegisterService:UserRegisterService) 
  {
    
    this.userRegister=this.userRegisterService.userRegister;
    this.personalForm=new FormGroup({
      genderCtrl:new FormControl(null,Validators.required),
      nationalityCtrl:new FormControl(null,Validators.required),
      aadharCtrl:new FormControl(null,Validators.required),
      panCtrl:new FormControl(null,Validators.required),
      // ageCtrl:new FormControl(null,[Validators.required,Validators.min(25)])
      ageCtrl:new FormControl(null,Validators.required)
      
      
     });
  }

  public get genderCtrl() {
    return this.personalForm.get('genderCtrl');
  }
  public get nationalityCtrl() {
    return this.personalForm.get('nationalityCtrl');
  }
  public get aadharCtrl() {
    return this.personalForm.get('aadharCtrl');
  }
  public get panCtrl() {
    return this.personalForm.get('panCtrl');
  }
  public get ageCtrl() {
    return this.personalForm.get('ageCtrl');
  }
 

  ngOnInit(): void {
  }
  OnSave()
  {
    if(this.aadharCtrl.value.length!=12)
    {this.invalidaadhar="Invalid Aadhar number";}
    
    else  if(this.panCtrl.value.length!=10)
    {this.invalidpan="Invalid Pan number";}
    else
    if(this.personalForm.valid)
    {
    this.customerApplicationService.customerApplication.Gender=this.personalForm.get('genderCtrl').value;
    this.customerApplicationService.customerApplication.Nationality=this.personalForm.get('nationalityCtrl').value;
    this.customerApplicationService.customerApplication.AadharNo=this.personalForm.get('aadharCtrl').value;
    this.customerApplicationService.customerApplication.PanNo=this.personalForm.get('panCtrl').value;
    this.customerApplicationService.age=this.personalForm.get('ageCtrl').value;
    this.customerApplicationService.customerApplication.EmailID=this.userRegisterService.userRegister.EmailID;
      console.log(this.customerApplicationService.customerApplication);

      this.routes.navigate(['/incomedetails']);
    }
    else
    this.flag=1;


  }
  
}
