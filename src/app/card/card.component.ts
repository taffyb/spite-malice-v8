import { Component, OnInit,Input, Output,EventEmitter, HostBinding } from '@angular/core';
import {Options} from '../classes/options'
import {SelectedCard} from '../classes/selected-card'

@Component({
    selector: 'card',
    templateUrl:'./card.component.html',
    styleUrls: ['./card.component.css']
  })
  export class CardComponent {
    @Input()cardNo:number;
    @Input()pos:number;
    @Input()options:Options = new Options();
    @Output()onSelect:EventEmitter<SelectedCard> = new EventEmitter<SelectedCard>();
        
    constructor() {
    }
    
    filename():string{
        let filename:string;
        if(this.cardNo>=0){
            filename="c"+(this.cardNo<10?"0"+this.cardNo:this.cardNo)+".png";
        }else{
            filename="back.png";
        }
        return filename;
    }
                    
    toggleSelection(){

        let selectedCard=new SelectedCard();
        selectedCard.cardNo=this.cardNo;
        selectedCard.position=this.pos;
        this.onSelect.emit(selectedCard);
    }
}
