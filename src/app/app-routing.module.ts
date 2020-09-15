import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligiblityCalculatorComponent } from './eligiblity-calculator/eligiblity-calculator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginscreenComponent } from './adminloginscreen/adminloginscreen.component';
import { AdminshowloanComponent } from './adminshowloan/adminshowloan.component';
import { AdminshowappComponent } from './adminshowapp/adminshowapp.component';
import { AdminchangepasswordComponent } from './adminchangepassword/adminchangepassword.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerchangepasswordComponent } from './customerchangepassword/customerchangepassword.component';
import { CustomerafterloginComponent } from './customerafterlogin/customerafterlogin.component';
import { CustomerviewaccountComponent } from './customerviewaccount/customerviewaccount.component';
import { CustomerviewappComponent } from './customerviewapp/customerviewapp.component';
import { CustomerviewloanstatusComponent } from './customerviewloanstatus/customerviewloanstatus.component';
import { FeaturesComponent } from './features/features.component';



const routes: Routes = [
  {path:'personaldetails',component:PersonalDetailsComponent},
  {path:'incomedetails',component:IncomeDetailsComponent},
  {path:'propertydetails',component:PropertyDetailsComponent},
  {path:'loandetails',component:LoanDetailsComponent},
  {path:'documentdetails',component:DocumentDetailsComponent},
  {path:'userregister',component:UserRegisterComponent},
  {path:'applicationStatus',component:ApplicationStatusComponent},
  {path: '', component:HomePageComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path: 'faq', component:FAQComponent},
  {path:'documents',component:DocumentsComponent},
  // {path:'**', redirectTo:''},
  {path:'eligiblitycalculator',component:EligiblityCalculatorComponent},
  {path:'emicalculator',component:EMICalculatorComponent},
  {path:'calculators',component:CalculatorsComponent},
  {path:"adminshowapp",component:AdminshowappComponent},
  {path:"adminshowloan",component:AdminshowloanComponent},
  {path:"adminchangepassword",component:AdminchangepasswordComponent},
  {path:'customerchangepassword',component:CustomerchangepasswordComponent},
  {path:'customerafterlogin',component:CustomerafterloginComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:"customerviewapp",component:CustomerviewappComponent},
  {path:"customerviewloanstatus",component:CustomerviewloanstatusComponent},
  {path:"customerviewaccount",component:CustomerviewaccountComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminloginscreen",component:AdminloginscreenComponent},
  {path:"features",component:FeaturesComponent}
  //{path:'userregister',component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UserRegisterComponent,CustomerviewaccountComponent,CustomerviewloanstatusComponent,CustomerviewappComponent,CustomerloginComponent,CustomerafterloginComponent,CustomerchangepasswordComponent,CalculatorsComponent,PersonalDetailsComponent,IncomeDetailsComponent,PropertyDetailsComponent,LoanDetailsComponent,
DocumentDetailsComponent,HomePageComponent,FeaturesComponent,AboutUsComponent,FAQComponent,DocumentsComponent,EligiblityCalculatorComponent,EMICalculatorComponent]
