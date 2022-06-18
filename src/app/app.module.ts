import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransposeComponent } from './ui/transpose/transpose.component';
import { WhiteComponent } from './ui/key/white/white.component';
import { BlackComponent } from './ui/key/black/black.component';
import { OctaveComponent } from './ui/octave/octave.component';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './ui/keyboard/keyboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TransposeComponent,
    WhiteComponent,
    BlackComponent,
    OctaveComponent,
    KeyboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
