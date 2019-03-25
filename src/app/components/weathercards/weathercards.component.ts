import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weathercards',
  templateUrl: './weathercards.component.html',
  styleUrls: ['./weathercards.component.scss']
})
export class WeathercardsComponent implements OnInit {

  @Input() weatherItem = {};

  constructor() { }

  ngOnInit() {
  }

}
