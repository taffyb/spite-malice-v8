import { Component, OnInit, Input } from '@angular/core';
import {Options} from '../classes/options';
import {SMUtils} from '../classes/sm.utils';
import {Game} from '../classes/games';
import {SelectedCard} from '../classes/selected-card';
import {ICardModel, Card} from '../classes/cards';
import {PositionsEnum, PlayerPositionsEnum, CardsEnum} from '../classes/enums';

import {GameService} from '../services/game.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {
//    @Input()uuid:string=null;
  pE=PositionsEnum;
  pPE=PlayerPositionsEnum;
  cE=CardsEnum;
  players=[0,1];
  activePlayer=0;
  game:Game;
  from:Card=new Card(-1,-1);
  to:Card=new Card(-1,-1);
  
//  temp:ICardModel[]=[{cardNo:CardsEnum.BACK,position:PositionsEnum.PLAYER_HAND_1+10}];

  constructor(private gameSvc:GameService) { 
      this.game=gameSvc.newGame("", "", "");
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.KING,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.QUEEN,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.JACK,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.TEN,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.NINE,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.EIGHT,PositionsEnum.PLAYER_STACK_1));
      this.game.cardPositions[PositionsEnum.PLAYER_STACK_1].push(new Card(CardsEnum.SEVEN,PositionsEnum.PLAYER_STACK_1));
//      this.game.cardPositions[PositionsEnum.PLAYER_STACK_3].pop();
      this.game.cardPositions[PositionsEnum.PLAYER_HAND_4+10].pop();
  }

  ngOnInit() {
  }
  canDiscard():boolean{
      let canDiscard:boolean;
      for(let i=0;i<4;i++){
          //check that each active player stack has at least 1 card 
          canDiscard= this.game.cardPositions[PositionsEnum.PLAYER_STACK_1+i+(PlayerPositionsEnum.PLAYER_2*this.activePlayer)].length>0
          if(!canDiscard){break;}
      }
      return canDiscard;
  }
  select(selectedCard:SelectedCard){
      if(this.from.cardNo==-1){
          this.from= new Card(selectedCard.cardNo,selectedCard.position);
      }else{
          if(this.from.cardNo==selectedCard.cardNo){
              this.from = new Card(-1,-1);
          }else{
              this.to = new Card(selectedCard.cardNo,selectedCard.position);
              //move from ==> to
          }
      }
      console.log(`PlayArea\nselectedCard: ${JSON.stringify(selectedCard)}\nfrom: ${JSON.stringify(this.from)}\nto: ${JSON.stringify(this.to)}`);
  }
  getOptions(position:number):Options{
      let opt:Options=new Options();
      let cardAtPosition:Card;
      
      opt.selected=(this.from.position==position);
      if([PositionsEnum.DECK,PositionsEnum.RECYCLE].includes(position)){opt.showCardFace=false;}
//      *** TESTING ONLY ***
//      this.from=new Card(CardsEnum.ACE,PositionsEnum.PLAYER_HAND_1);
  
      //if there is no card at this position and it is the centre stack or active player's stack
      if(this.game.cardPositions[position].length==0){
//          console.log(`There is no card at position [${position}]`);
         switch(position){
             case PositionsEnum.PLAYER_PILE+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
                 //Pile can't be empty while game in play
                 break;
             case PositionsEnum.PLAYER_HAND_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_HAND_2+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_HAND_3+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_HAND_4+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_HAND_5+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
                //the player can't place cards in their hand
                 break;
             case PositionsEnum.PLAYER_STACK_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_STACK_2+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_STACK_3+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
             case PositionsEnum.PLAYER_STACK_4+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):                 
                 //can be a target as long as there is a from position
                 opt.selectableTo=true && (this.from.cardNo!=-1);
                 break;
             case PositionsEnum.STACK_1:
             case PositionsEnum.STACK_2:
             case PositionsEnum.STACK_3:
             case PositionsEnum.STACK_4:
//                 console.log(`([${CardsEnum.ACE},${CardsEnum.JOKER}].includes(${SMUtils.toFaceNumber(this.from.cardNo)}/${this.from.cardNo}))`);
                 opt.selectableTo= ([CardsEnum.ACE,CardsEnum.JOKER].includes(SMUtils.toFaceNumber(this.from.cardNo)));
          }
      }else{
          cardAtPosition=this.game.cardPositions[position][this.game.cardPositions[position].length-1];
          
          switch(position){
              case PositionsEnum.PLAYER_PILE+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_HAND_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_HAND_2+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_HAND_3+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_HAND_4+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_HAND_5+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
                  if(this.from.position>-1){ //a card is selected
                      if(this.from.position==position){
                          opt.selected=true;
                          opt.selectableFrom=true;
                      }
                  }else{
                      opt.selectableFrom=true;
                  }
                  break;
              case PositionsEnum.PLAYER_STACK_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_STACK_2+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_STACK_3+(this.activePlayer*PlayerPositionsEnum.PLAYER_2):
              case PositionsEnum.PLAYER_STACK_4+(this.activePlayer*PlayerPositionsEnum.PLAYER_2): 
                  if(this.from.position>-1){ //a card is selected
                      if(this.from.position==position){
                          opt.selected=true;
                          opt.selectableFrom=true;
                      }      
                      if(this.from.position!=position && 
                         this.canDiscard() && 
                         this.from.position!=PositionsEnum.PLAYER_PILE+(this.activePlayer*PlayerPositionsEnum.PLAYER_2)){
                          opt.selectableTo=true;
                      }
                  }else{
                      opt.selectableFrom=true;
                  }
                  opt.canDiscard=this.canDiscard();
                  break;
              case PositionsEnum.STACK_1:
              case PositionsEnum.STACK_2:
              case PositionsEnum.STACK_3:
              case PositionsEnum.STACK_4:
                  opt.selectableTo= (SMUtils.toFaceNumber(cardAtPosition.cardNo)==(SMUtils.toFaceNumber(this.from.cardNo)-1) ||
                                     SMUtils.toFaceNumber(this.from.cardNo)==CardsEnum.JOKER);
           }
      }
//      console.log(`Options for position [${position}]:${JSON.stringify(opt)}`);
      return opt;
  }
}
