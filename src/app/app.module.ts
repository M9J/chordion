import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransposeComponent } from './ui/transpose/transpose.component';
import { WhiteComponent } from './ui/key/white/white.component';
import { BlackComponent } from './ui/key/black/black.component';
import { OctaveComponent } from './ui/octave/octave.component';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './ui/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TransposeComponent,
    WhiteComponent,
    BlackComponent,
    OctaveComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
