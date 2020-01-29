import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {

  game:Game;
  cards:number[][]=[[1,2,3,4,5],[],[8,9,10],[11,12,13,14]];

  constructor() { }

  ngOnInit() {
  }

}
