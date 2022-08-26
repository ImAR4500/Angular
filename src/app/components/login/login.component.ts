import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

  user={
    username:'',
    password:''
  }
  token: string ='';
  msg: string = '';
  fieldStatus: any = null;
  constructor(private loginService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  handleReset() {
        this.msg = ""
        this.fieldStatus = null;
      }

  handleLogin()
  {
    if(this.user.username!='' && this.user.password!='')
    {
      console.log("login details submitted");

      this.loginService.doLogin(this.user).subscribe(
       
          (response:any) => {
                      const token = JSON.parse(response)
                      this.loginService.setSession(token.token);
                      this.router.navigateByUrl("home");
        },
        error=>{
          try {
                        this.fieldStatus = JSON.parse(error.status);
                      } catch (error) {
                        this.msg = "Service is down, please try again later..."
                        console.log(this.msg);
                      }
        }
        
        
      )

    }else{
      console.log("empty fields");
    }
  }
}