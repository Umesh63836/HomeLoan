import { Component, OnInit } from '@angular/core';
import { CustomerApplicationService } from '../Services/ApplicationService';
import { Router } from '@angular/router';
import {UserRegisterService} from '../Services/UserRegisterService';
import { FormGroup,FormControl,Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  invalidlm1:string;
  invalidlm2:string;
  invalidtenure:string;
  invaliddp:string;
  flag:number;
  maxLoanr:number;
  loanForm:FormGroup;
  application;
  netIncome:number;
  maxLoan:number;
  maxTenure:number;
  rate:number;
  downpay:number=this.cas.customerApplication.EstimatedAmount*0.2;
  propvalue:number=this.cas.customerApplication.EstimatedAmount*0.8;
 
  // currentYear: number = new Date().getFullYear();
  
  // start = new Date(this.urs.userRegister.DOB);

  

  constructor(private cas:CustomerApplicationService,private routes:Router) { 

    this.loanForm=new FormGroup({
      // maxLoanCtrl:new FormControl(null,Validators.required),
      // interestCtrl:new FormControl(null,Validators.required),
      tenureCtrl:new FormControl(null,[Validators.required,Validators.max(this.maxTenure)]),
      loanAmtCtrl:new FormControl(null,[Validators.required,Validators.max(this.maxLoan),Validators.max(this.propvalue)]),
      // downPaymentCtrl:new FormControl(null,[Validators.required,Validators.min(this.downpay)])
      downPaymentCtrl:new FormControl(null,Validators.required)
    })

    

    this.netIncome=this.cas.customerApplication.MonthlyIncome-this.cas.customerApplication.Current_EMI-this.cas.customerApplication.Personal_Expenses;
    // console.log(this.netIncome);
    // console.log(this.cas.customerApplication.MonthlyIncome);
    // console.log(this.cas.customerApplication.Current_EMI);
    // console.log(this.cas.customerApplication.PersonalExpenses);
    
    // this.age =  this.today.getFullYear() - this.urs.userRegister.DOB.getFullYear();
    this.maxTenure=(this.cas.customerApplication.RetirementAge-this.cas.age)*12;
    // console.log(this.netIncome*Math.pow((1.00708),(this.maxTenure-1))/(0.00708)*Math.pow((0.00708+1),(this.maxTenure)));
    this.maxLoan=this.netIncome*((Math.pow(1.00708,this.maxTenure))-1)/((0.00708)*Math.pow((0.00708+1),(this.maxTenure)));
    this.rate=8.5;
    this.maxLoanr=Math.round(this.maxLoan);
  }

  public get tenureCtrl() {
    return this.loanForm.get('tenureCtrl');
  }
  public get loanAmtCtrl() {
    return this.loanForm.get('loanAmtCtrl');
  }
  public get downPaymentCtrl() {
    return this.loanForm.get('downPaymentCtrl');
  }
 

  ngOnInit(): void {
  }
  postApplication()
  {
    if(this.loanAmtCtrl.value>this.maxLoan)
    {
      this.invalidlm1="Enter an amount less than maximum loan you are eligible for"
    }
    else if(this.loanAmtCtrl.value>0.8*this.cas.customerApplication.EstimatedAmount)
    {
      this.invalidlm2="You are only eligible for loan amount less than 80% of property value"
    }
    else if(this.tenureCtrl.value>this.maxTenure)
    {
      this.invalidtenure="Enter a tenure period less than max tenure period you are eligible for"
    }
    else if(this.downPaymentCtrl.value<0.2*this.cas.customerApplication.EstimatedAmount)
    {
      this.invaliddp="You have to atleast invest downpayment of 20% of Property value"
    }
    else
    if(this.loanForm.valid)
    {
    this.cas.customerApplication.Tenure=this.loanForm.get('tenureCtrl').value;
    this.cas.customerApplication.LoanAmount=this.loanForm.get('loanAmtCtrl').value;
    this.cas.customerApplication.DownPayment=this.loanForm.get('downPaymentCtrl').value;
    this.cas.customerApplication.InterestRate=this.rate;
    console.log(this.cas.customerApplication);
    
    this.cas.postApplication().subscribe((data)=>{this.application=data;})
    
    // this.dialogRef.close();
    console.log(this.application);
    this.routes.navigate(['/documentdetails']);

    }
    else 
    this.flag=1; 
  }


}
