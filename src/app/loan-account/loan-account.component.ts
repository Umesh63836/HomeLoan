import { Component, OnInit } from '@angular/core';
import {AccountService} from './AccountService';
import {LoanAccount} from  './LoanAccount'

@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['./loan-account.component.css']
})
export class LoanAccountComponent implements OnInit {

  loanAccount;
  appId:string;
  constructor(private accountService:AccountService) { }

  getaccount()
  {
    this.accountService.fetchAccount(this.appId).subscribe((data)=>{
      this.loanAccount = data;});
  }

  ngOnInit(): void {
  }

}
