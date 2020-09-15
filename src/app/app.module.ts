import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';
import { HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { AccountService} from './loan-account/AccountService';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRegisterService} from './Services/UserRegisterService';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerApplicationService} from './Services/ApplicationService';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { TncComponent } from './tnc/tnc.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligiblityCalculatorComponent } from './eligiblity-calculator/eligiblity-calculator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerafterloginComponent } from './customerafterlogin/customerafterlogin.component';
import { CustomerchangepasswordComponent } from './customerchangepassword/customerchangepassword.component';
import {AdminService} from './Services/adminService';
import {CustomerService} from './Services/customerService';
import { CustomerviewaccountComponent } from './customerviewaccount/customerviewaccount.component';
import { CustomerviewappComponent } from './customerviewapp/customerviewapp.component';
import { CustomerviewloanstatusComponent } from './customerviewloanstatus/customerviewloanstatus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginscreenComponent } from './adminloginscreen/adminloginscreen.component';
import { AdminshowappComponent } from './adminshowapp/adminshowapp.component';
import { AdminshowloanComponent } from './adminshowloan/adminshowloan.component';
import { AdminchangepasswordComponent } from './adminchangepassword/adminchangepassword.component';
import { AdminshowdocComponent } from './adminshowdoc/adminshowdoc.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanAccountComponent,
    UserRegisterComponent,
    PersonalDetailsComponent,
    IncomeDetailsComponent,
    PropertyDetailsComponent,
    LoanDetailsComponent,
    DocumentDetailsComponent,
    TncComponent,
    ApplicationStatusComponent,
    AboutUsComponent,
    FAQComponent,
    DocumentsComponent,
    EligiblityCalculatorComponent,
    HomePageComponent,
    EMICalculatorComponent,
    CalculatorsComponent,
    CustomerloginComponent,
    CustomerafterloginComponent,
    CustomerchangepasswordComponent,
    CustomerviewaccountComponent,
    CustomerviewappComponent,
    CustomerviewloanstatusComponent,
    AdminloginComponent,
    AdminloginscreenComponent,
    AdminshowappComponent,
    AdminshowloanComponent,
    AdminchangepasswordComponent,
    AdminshowdocComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    RouterModule,
  ],
  providers: [AccountService,UserRegisterService,CustomerApplicationService,AdminService,CustomerService],
  bootstrap: [AppComponent],
  entryComponents: [TncComponent]
})
export class AppModule { }
