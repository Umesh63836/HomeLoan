import { Component, OnInit } from '@angular/core';
import { CustomerApplicationService } from '../Services/ApplicationService';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {

  incomeForm:FormGroup;
  check:string;
  invalidmi:string;
  invalidwe:string;
  invalidcs:string;
  flag:number;
  

  constructor(private customerApplicationService:CustomerApplicationService,private routes:Router) {
    
    this.incomeForm=new FormGroup({
      typeOfEmpCtrl:new FormControl(null,Validators.required),
      retAgeCtrl:new FormControl(null,Validators.required),
      orgTypeCtrl:new FormControl(null,Validators.required),
      empNameCtrl:new FormControl(null,Validators.required),
      monthlyIncCtrl:new FormControl(null,[Validators.required,Validators.min(10000)]),
      personalExpCtrl:new FormControl(null,Validators.required),
      workExpCtrl:new FormControl(null,[Validators.required,Validators.min(5)]),
      creditScoreCtrl: new FormControl(null,[Validators.required,Validators.min(750)]),
      cEMICtrl: new FormControl(null,Validators.required)
    })
   }

   public get typeOfEmpCtrl() {
    return this.incomeForm.get('typeOfEmpCtrl');
  }
  public get retAgeCtrl() {
    return this.incomeForm.get('retAgeCtrl');
  }
  public get orgTypeCtrl() {
    return this.incomeForm.get('orgTypeCtrl');
  }
  public get monthlyIncCtrl() {
    return this.incomeForm.get('monthlyIncCtrl');
  }
  public get empNameCtrl() {
    return this.incomeForm.get('empNameCtrl');
  }
  public get personalExpCtrl() {
    return this.incomeForm.get('personalExpCtrl');
  }
  public get workExpCtrl() {
    return this.incomeForm.get('workExpCtrl');
  }
  public get cEMICtrl() {
    return this.incomeForm.get('cEMICtrl');
  }
  public get creditScoreCtrl() {
    return this.incomeForm.get('creditScoreCtrl');
  }

  ngOnInit(): void {
  }

  OnSave()
  {
    if(this.monthlyIncCtrl.value<20000)
    {this.invalidmi="Minimum monthly income should be greater than Rs.20000"}
    else if(this.workExpCtrl.value<5)
    {this.invalidwe="Work Experience/Buisness Continuity should be greater than 5 Years"}
    else if(this.creditScoreCtrl.value<750)
    {this.invalidcs="Minimum Credit Score should be more 750"}
    else

    if(this.incomeForm.valid)
    {
    this.customerApplicationService.customerApplication.Type_Of_Employment=this.incomeForm.get('typeOfEmpCtrl').value;
    this.customerApplicationService.customerApplication.RetirementAge=this.incomeForm.get('retAgeCtrl').value;
    this.customerApplicationService.customerApplication.OrganizationType=this.incomeForm.get('orgTypeCtrl').value;
    this.customerApplicationService.customerApplication.MonthlyIncome=this.incomeForm.get('monthlyIncCtrl').value;
    this.customerApplicationService.customerApplication.EmployerName=this.incomeForm.get('empNameCtrl').value;
    this.customerApplicationService.customerApplication.Personal_Expenses=this.incomeForm.get('personalExpCtrl').value;
    //this.customerApplicationService.customerApplication.WorkExperience=this.incomeForm.get('workExpCtrl').value;
    //this.customerApplicationService.customerApplication.CreditScore=this.incomeForm.get('creditScoreCtrl').value;
    
    this.customerApplicationService.customerApplication.Current_EMI=this.incomeForm.get('cEMICtrl').value;

    console.log(this.customerApplicationService.customerApplication);
    this.routes.navigate(['/propertydetails']);
    }
    else 
    this.flag=1;
    }
}
