import { Component, OnInit } from '@angular/core';
import { LoginResultModel } from 'src/app/models/login-result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginErrorMessage: string ='';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backInfo(loginResult: LoginResultModel){
    if(!loginResult.success){
      this.loginErrorMessage = loginResult.message;
    }else{
      this.router.navigate(['/dashboard']);
    }

    console.log("Received Event from app-login-form");
    console.log(loginResult);
  }
}
