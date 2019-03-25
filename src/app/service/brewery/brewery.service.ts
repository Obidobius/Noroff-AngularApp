import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient) { }

  getBrews(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.openbrewerydb.org/breweries/')
  }
}
