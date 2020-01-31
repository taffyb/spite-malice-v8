import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.css']
})
export class PileComponent implements OnInit {
  @Input()cards:number[];

  constructor() { }

  ngOnInit() {
  }

}
