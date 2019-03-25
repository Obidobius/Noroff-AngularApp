import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) { }

  newChuck(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.chucknorris.io/jokes/random')
  }
  getChuck(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.chucknorris.io/jokes/random')
  }
}
