import { Component, OnInit } from '@angular/core';
import { ProcessPensionService } from 'src/app/services/process-pension.service';
import { PensionDetail } from 'src/app/PensionDetail';


@Component({
    selector: 'app-pension-details',
    templateUrl: './pension-details.component.html',
    styleUrls: ['./pension-details.component.css']
  })
export class PensionDetailsComponent implements OnInit {

  credentials={
    aadhaarNumber:"",
  }
  result:any;
  errorStatus:any = null;
  msg:string = '';
  pension:PensionDetail[]=[];


  constructor(private pensionService:ProcessPensionService) { }

  ngOnInit(): void {
  }
  handleReset() {
    this.msg = ""
    this.errorStatus = null;
  }
  onSubmit()
  {
  

    this.pensionService.getPensionDetails(this.credentials).subscribe(
      (pensiondetail:any)=>
      {
        this.pension.push(pensiondetail);
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
