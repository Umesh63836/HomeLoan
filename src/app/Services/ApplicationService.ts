import {CustomerApplication} from '../Models/Application';
import {applicationdocument} from '../Models/applicationdocument';
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';

@Injectable()
export class CustomerApplicationService
{
    age:number;
    customerApplication:CustomerApplication;
    appdoc:applicationdocument;
    constructor(private http:HttpClient)
    {
       this.customerApplication=new CustomerApplication();
       this.appdoc=new applicationdocument();
    //    this.age =  this.today.getFullYear() - this.urs.userRegister.DOB.getFullYear();
    }
    
    public postApplication(){
        return this.http.post("http://localhost:63846/api/CustomerApplications",this.customerApplication);    
    }


    postFile(fileToUpload:File,btnId:string,appid:string)
    {
    const endpoint="http://localhost:63846/api/CustomerDocuments/UploadImage?aid="+appid+"&pass="+0;
    const formData:FormData=new FormData();
    console.log(fileToUpload.name);
    formData.append(btnId,fileToUpload,fileToUpload.name);
    console.log(btnId);
    console.log(formData);
    return this.http.post(endpoint,formData);

    }

}