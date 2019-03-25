import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './service/auth/auth.service';
import { DaskboardPageComponent } from './pages/daskboard-page/daskboard-page.component';
import { WeatherService } from './service/weather/weather.service';
import { WeathercardsComponent } from './components/weathercards/weathercards.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './components/activity/activity.component';
import {ActivityService} from './service/activity/activity.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {PokemonService} from './service/pokemon/pokemon.service';
import { BrewerycardsComponent } from './components/brewerycards/brewerycards.component';
import { BreweryService } from './service/brewery/brewery.service';
import { ChuckCardsComponent } from './components/chuck-cards/chuck-cards.component';
import { ChuckService} from './service/chuck/chuck.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormComponent,
    LoginPageComponent,
    DaskboardPageComponent,
    WeathercardsComponent,
    ActivityComponent,
    PokemonComponent,
    BrewerycardsComponent,
    ChuckCardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    //Husk å skrive in httpClientModule til Json
  ],
  providers: [
    AuthService,
    WeatherService,
    ActivityService,
    PokemonService,
    BreweryService,
    ChuckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
