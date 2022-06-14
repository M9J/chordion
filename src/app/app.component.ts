import { Component } from '@angular/core';
import { Chord } from './chordion/core/chord';
import { Keyboard } from './chordion/core/keyboard';
import { Transpose } from './chordion/core/transpose';
import { ChordionService } from './chordion/services/chordion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private chordionService: ChordionService) {
    this.poc2();
  }

  poc2() {
    const keyboard = new Keyboard(88).keyboard;
    this.chordionService.currentKeyboard = keyboard;
    if (keyboard) {
      const cMajor = new Chord([
        keyboard['3C'],
        keyboard['3F'],
        keyboard['3G'],
      ]);
      const transposedChord = new Transpose().chord(cMajor, 2, keyboard);
      console.log('transposedChord', transposedChord);
    }
  }
}
