import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LoginResultModel } from 'src/app/models/login-result.model';

//Decorator = Hvor alt kommer ifra
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
}) //Write everything inside here
export class LoginFormComponent implements OnInit {

  @Output() onLoginUser: EventEmitter<LoginResultModel>;
  form:FormGroup;

  constructor(private auth: AuthService) {
    this.onLoginUser = new EventEmitter<LoginResultModel>();
   }

  ngOnInit() {
    //Once HTML has been loaded
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  } 

  onLoginSubmit(formValues: any){
    if(this.auth.login(formValues.username, formValues.password)){

      this.auth.startSession();

      this.onLoginUser.emit({
        success: true
      });
    }

    else{
      this.onLoginUser.emit({
        success: false,
        message: 'Invalide login Details',
      })
    }

    console.log(formValues);

  }
}
