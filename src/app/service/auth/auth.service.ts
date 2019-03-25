import { Injectable } from '@angular/core';
import { AccountModel } from 'src/app/models/account.model';
import { MOCK_ACCOUNT } from 'src/app/mocks/account.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  account: AccountModel = {

  }as AccountModel;

  constructor() { 
    this.account = MOCK_ACCOUNT;
  }

    public login(username: string, password: string): boolean {
      return this.account.username == username && this.account.password == password;
  }

  public startSession() {
      window.localStorage.setItem('token', '');
  }


  isAuthorized(): boolean | string {
    return window.localStorage.getItem('nada');
  }
  
  getAccount(){
    return this.account
    
  }

}