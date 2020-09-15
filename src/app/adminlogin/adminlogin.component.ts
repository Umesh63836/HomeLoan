import { Component, OnInit } from '@angular/core';
import {AdminService} from '../Services/adminService';
import {Admin} from '../Models/admin';
import { Router } from '@angular/router';
import {  CookieService  } from 'ngx-cookie-service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:Admin;
  result;

  constructor(private adminser :AdminService,private routes:Router,private cookieService: CookieService) { 
    this.admin=new Admin();

  }

  checkLogin()
  {
    this.cookieService.set('username',this.admin.adminId);
    
    console.log(this.cookieService.get('username'));  
    this.adminser.adminUser(this.admin).subscribe((data)=>{
    this.result=data;
    console.log(this.result); 
    
    })
    if(this.result==1)
      {
        this.adminser.isloggedin=true;
       this.routes.navigate(['/adminloginscreen']);
      }
   // console.log(this.result);
    console.log(this.admin);
    //this.routes.navigate(["/adminlogin/afterlogin"]);
  }

  ngOnInit(): void {
  }

}