import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/adminService';
import {Application} from '../Models/appilications';
import {LoanStatus} from '../Models/loanStatus';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-adminloginscreen',
  templateUrl: './adminloginscreen.component.html',
  styleUrls: ['./adminloginscreen.component.css']
})
export class AdminloginscreenComponent implements OnInit {
  applications;
  choice:string;
  

  
  constructor(private adminser:AdminService,private routes:Router,private cookie:CookieService) {
    if(!this.cookie.get('username'))
    {
      this.routes.navigate(["/adminlogin"]);
    }
   }

   logout()
{
  this.cookie.delete('username');
  this.routes.navigate(['/adminlogin']);
}
  // fetchApplications(){
  //   this.routes.navigate(["/viewapp"]);
  // //   this.adminser.getApplications().subscribe((data)=>{
  // //     this.applications=data;
  // //   })
  //  }

  

  ngOnInit(): void {
  }

}
