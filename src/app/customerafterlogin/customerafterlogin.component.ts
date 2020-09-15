import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerafterlogin',
  templateUrl: './customerafterlogin.component.html',
  styleUrls: ['./customerafterlogin.component.css']
})
export class CustomerafterloginComponent implements OnInit {

  constructor(private routes:Router,private cookie:CookieService) {
    if(!this.cookie.get('username'))
  {
    this.routes.navigate(["/customerlogin"]);
  }
   }

  ngOnInit(): void {
  }

  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/customerlogin']);
  }

}
