import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
    PileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
