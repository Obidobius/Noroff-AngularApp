import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather/weather.service';
import { ActivityService} from 'src/app/service/activity/activity.service';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { BreweryService } from 'src/app/service/brewery/brewery.service';
import { ChuckService } from 'src/app/service/chuck/chuck.service';

@Component({
  selector: 'app-daskboard-page',
  templateUrl: './daskboard-page.component.html',
  styleUrls: ['./daskboard-page.component.scss']
})
export class DaskboardPageComponent implements OnInit {

  weatherDate= [];
  //
  activityList= null;
  activity:any;
  //
  pokemonList= [];
  //
  brewList=[];
  //
  chuckList=[];

  //Put in what you want to put in to the page. Here i inject the WeatherService
  constructor(private weather: WeatherService,
    private chuck: ChuckService,
    private activitus: ActivityService,
    private pokemooon: PokemonService, 
    private brews: BreweryService) { }


  ngOnInit() {
    //Chuck
    this.chuck.getChuck().subscribe((response:any) => {
      this.chuckList = response
      console.log("i am pressed");
    });
    //Weather
    this.weather.getWeather().subscribe((response:any) => {
      this.weatherDate = response.consolidated_weather
    }, err => {

    });
    //activity
    this.activitus.getActivity().subscribe((response:any) => {
      console.log(response)
      this.activityList = response
     
    });
    //Pokemon
    this.pokemooon.getPokemon().subscribe((response:any) => {
      this.pokemonList = response.results
      console.log(this.pokemonList);
    });
    //Brewery
    this.brews.getBrews().subscribe((response:any) => {
      console.log(response)
      this.brewList = response
    });
  }

}
