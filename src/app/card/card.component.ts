import { Component, OnInit,Input,HostBinding } from '@angular/core';
import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
//import { CardAnimation } from '../classes/CardAnimation';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';



@Component({
    selector: 'card',
    templateUrl:'./card.component.html',
    styleUrls: ['./card.component.css'],
//  animations: [CardAnimation]
  })
  export class CardComponent {
    @Input()cardNo:number;
    @Input()pos:number;
    @Input()selectable:boolean=false;
    
    @HostBinding('style') style: SafeStyle;
    
    constructor(sanitizer: DomSanitizer) {
//      this.style = sanitizer.bypassSecurityTrustStyle('background: green;  display: block;');
    }
    
    filename():string{
        let filename:string; 
    console.log(`cardNo:${this.cardNo}`);
        if(this.cardNo!=-1){
            filename="c"+(this.cardNo<10?"0"+this.cardNo:this.cardNo)+".png";
        }else{
            filename="back.png";
        }
        return filename;
    }
}
