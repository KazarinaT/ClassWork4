import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiggestThingComponent } from './biggest-thing/biggest-thing.component';
import { StrangehobbyComponent } from './strangehobby/strangehobby.component';

@NgModule({
  declarations: [
    AppComponent,
    BiggestThingComponent,
    StrangehobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
