import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Husk å skifte HttpClient til riktig 'from'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//inject constructor dependency = json
  constructor(private http: HttpClient) {  }

//method function. Her henter du json linken'e

  getWeather(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/862592/')
  }

}

