import { Component, OnInit } from '@angular/core';
// import { AppStatusService } from '../Services/AppStatusService';
//import { CustomerApplicationService } from '../Services/ApplicationService';
import { UserRegisterService } from '../Services/UserRegisterService';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  
  applicationId:string;
  contact:string;
  loanStatus:string;
  date:Date;
  constructor(private userRegisterService:UserRegisterService,private cookie:CookieService,private routes:Router) {
    this.applicationId=this.userRegisterService.userRegister.LastName.substr(0,3)+this.userRegisterService.userRegister.Contact.substr(6,4);
    this.date=new Date();
    this.date.setDate(this.date.getDate()+7);
    this.contact=this.userRegisterService.userRegister.Contact;
    this.loanStatus="Application sent for approval";
   }

  // getstatus()
  // {
  //   this.appStatusService.fetchStatus().subscribe((data)=>{
  //     this.appStatus = data;});
  // }

  ngOnInit(): void {
  }

  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/customerlogin']);
  }

}
