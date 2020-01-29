import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-stack',
  templateUrl: './player-stack.component.html',
  styleUrls: ['./player-stack.component.css']
})
export class PlayerStackComponent implements OnInit {
  @Input()cards:number[];
  @Input()canTarget:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

}
