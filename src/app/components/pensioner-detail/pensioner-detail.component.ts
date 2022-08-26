import { Component, OnInit } from '@angular/core';
import { ProcessPensionService } from 'src/app/services/process-pension.service';


@Component({
  selector: 'app-pensioner-detail',
  templateUrl: './pensioner-detail.component.html',
  styleUrls: ['./pensioner-detail.component.css']
})
export class PensionerDetailComponent implements OnInit {

  credentials={
    aadhaarNumber:"",
  }
  result:any;
  errorStatus:any = null;
  msg:string = '';
  pensioner:any=null;


  constructor(private pensionService:ProcessPensionService) { }

  ngOnInit(): void {
  }
  handleReset() {
    this.msg = ""
    this.errorStatus = null;
  }

  onSubmit()
  {
  

    this.pensionService.getPensionerDetail(this.credentials).subscribe(
      (pensionerdetail:any)=>
      {
        console.log(pensionerdetail);
        this.pensioner =pensionerdetail;
      },
      error=>
      {
        try {
          this.errorStatus = JSON.parse(error.status).errorStatus;
          console.log(this.credentials);
        } catch (error) {
          this.msg = "Service is down, please try again later..."
          console.log(this.msg);
        }
        
      }
    );
      
  }

}
