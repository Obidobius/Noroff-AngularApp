import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chuck-cards',
  templateUrl: './chuck-cards.component.html',
  styleUrls: ['./chuck-cards.component.scss']
})
export class ChuckCardsComponent implements OnInit {


  @Input() chuckJokes = {};

  constructor() { }

  ngOnInit() {
  }

}
