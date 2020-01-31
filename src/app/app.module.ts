import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { CardComponent } from './card/card.component';
import { PlayerStackComponent } from './player-stack/player-stack.component';
import { PileComponent } from './pile/pile.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    CardComponent,
    PlayerStackComponent,
    PileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
