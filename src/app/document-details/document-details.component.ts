import { Component, OnInit } from '@angular/core';
import { CustomerApplicationService } from '../Services/ApplicationService';
import { UserRegisterService } from '../Services/UserRegisterService';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {TncComponent} from '../tnc/tnc.component'

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
  
  fileToUpload:File=null;
  appid:string;
  imageUrl:string="assets/Img/preview.png";
  constructor(private customerApplicationService:CustomerApplicationService,private matDialog: MatDialog,private userRegisterService:UserRegisterService) { 
    this.appid=this.userRegisterService.userRegister.LastName.substr(0,3)+this.userRegisterService.userRegister.Contact.substr(6,4);

  }

  // postApplication()
  // {
  //   console.log(this.customerApplicationService.customerApplication)
  //   this.customerApplicationService.postApplication().subscribe((data)=>{this.applicationId=data;})
  //   this.status=true;
  //   console.log(this.status)
  // }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.id = "TncComponent";
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(TncComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

  onFileSelected(file:FileList)   //insert into customerApplication
  {
    this.fileToUpload=file.item(0);
    
    const button = event.target as HTMLButtonElement;
    console.log(button.id);

    if(button.id=="inpPan")
    {
      this.customerApplicationService.appdoc.panCard=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
      
    }
    else if(button.id=="inpVoter")
    {
      this.customerApplicationService.appdoc.voterId=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
    }
    else if(button.id=="inpSalSlip")
    {
      this.customerApplicationService.appdoc.salarySlip=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
    }
    else if(button.id=="inpLoa")
    {
      this.customerApplicationService.appdoc.loa=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
    }
    else if(button.id=="inpNoa")
    {
      this.customerApplicationService.appdoc.noc=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
    }
      
    else if(button.id=="inpAgrSale")
    {
      this.customerApplicationService.appdoc.agreementToSale=this.fileToUpload;
      console.log(this.customerApplicationService.appdoc);
    }
      
      
      
    
    
    //to view image
    var reader=new FileReader();
    reader.onload=(event:any)=>
    {
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

    
  }
  onUpload(Image:any)   //upload in db
  {
    const button = event.target as HTMLButtonElement;
    console.log(button.id);

    if(button.id=="btnPan")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.panCard,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }
    else if(button.id=="btnVoter")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.voterId,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }
    else if(button.id=="btnSalSlip")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.salarySlip,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }
    else if(button.id=="btnLoa")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.loa,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }
     else if(button.id=="btnNoc")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.noc,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }
     else if(button.id=="btnAgrSale")
    {
      this.customerApplicationService.postFile(this.customerApplicationService.appdoc.agreementToSale,button.id,this.appid).subscribe((data)=>
      {
        console.log(Image.value);
      });
    }

  }
}
