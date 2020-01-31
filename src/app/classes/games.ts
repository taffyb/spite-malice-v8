import {Card} from './cards';
export interface IGameModel {
    uuid: string;
    name: string;
    player1Uuid: string;
    player2Uuid: string;
}

export class Game implements IGameModel{
    uuid: string;
    name: string;
    player1Uuid: string;
    player2Uuid: string;
    activePlayer:number=0;

    cards:Card[];
    cardPositions:Card[][];

    constructor(name:string, player1Uuid: string, player2Uuid: string){
        this.name=name;
        this.player1Uuid=player1Uuid;
        this.player1Uuid=player1Uuid;
        this.cards=[];
        this.cardPositions=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    }
    
    
}