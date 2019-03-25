import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brewerycards',
  templateUrl: './brewerycards.component.html',
  styleUrls: ['./brewerycards.component.scss']
})
export class BrewerycardsComponent implements OnInit {

  @Input() brewTypes = {};

  constructor() { }

  ngOnInit() {
  }

}
