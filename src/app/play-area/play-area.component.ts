import { Component, OnInit, Input } from '@angular/core';
import {Game} from '../classes/games';
import {PositionsEnum,PlayerPositionsEnum} from '../classes/enums';

import {GameService} from '../services/game.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {
//    @Input()uuid:string=null;
  positionsEnum=PositionsEnum;
  playerPositionsEnum=PlayerPositionsEnum;
  players=[0,1];
  activePlayer=0;
  game:Game;

  constructor(private gameSvc:GameService) { 
      this.game=gameSvc.newGame("", "", "");
      console.log(`New Game.cardPositions:${JSON.stringify(this.game.cardPositions)}`);
  }

  canDiscard():boolean{
      return  true;
  }
  ngOnInit() {
  }

}
