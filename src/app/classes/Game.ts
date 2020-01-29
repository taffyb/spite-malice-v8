import {Card} from './cards';
import {IGameModel} from './IGameModel';

export class Game implements IGameModel{
    UUID: string;
    name: string;
    player1UUID: string;
    player2UUID: string;
    activePlayer:number=0;

    cards:Card[];
    cardPositions:Card[][];

    constructor(name:string, player1UUID: string, player2UUID: string){
        this.name=name;
        this.player1UUID=player1UUID;
        this.player1UUID=player1UUID;
        this.cards=[];
        this.cardPositions=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    }
    
    
}