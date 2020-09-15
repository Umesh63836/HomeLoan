import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName} from '@angular/forms';
import {AdminService} from '../Services/adminService';
import { Router } from '@angular/router';

import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-adminshowapp',
  templateUrl: './adminshowapp.component.html',
  styleUrls: ['./adminshowapp.component.css']
})
export class AdminshowappComponent implements OnInit {
  applications;

  constructor(private adminser:AdminService,private routes:Router,private cookie:CookieService) { }

  fetchApplications(){
    this.adminser.getApplications().subscribe((data)=>{
      this.applications=data;
    })
  }

  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/adminlogin']);
  }


  ngOnInit(): void {
  }

}
