import {Game} from './Game';
import {ICardModel, Card} from './cards';
import {PositionsEnum} from './enums';
import {DealerService} from '../services/dealer.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService{
    
    constructor(private dealerService:DealerService){}
    
    getGame(gameUuid:string):Game{return null;}
    
    newGame(name:string,player1Uuid:string,player2Uuid:string):Game{
        const game:Game=new Game(name,player1Uuid, player2Uuid);
        const cardNos:number[] = this.dealerService.getCards();
        let player=0;
        
        for(let c:number=0;c<13*2;c++){
            const card:ICardModel= new Card(c,PositionsEnum.PLAYER_PILE+(player*10));
            game.cards.push(card);
            game.cardPositions[PositionsEnum.PLAYER_PILE+(player*10)].push(card);
            player=(player===0?1:0);
        }
        return game;
    }
    saveGame(){}
}
  