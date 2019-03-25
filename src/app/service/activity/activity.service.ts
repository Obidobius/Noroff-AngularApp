import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivity(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://www.boredapi.com/api/activity?participants=1')
  }
}


//https://www.boredapi.com/api/activity?participants=1