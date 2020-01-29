import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { CardComponent } from './card/card.component';
import { PlayerStackComponent } from './player-stack/player-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayAreaComponent,
    CardComponent,
    PlayerStackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
