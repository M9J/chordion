import { Component } from '@angular/core';
import { Chord } from './chordion/core/chord';
import { Keyboard } from './chordion/core/keyboard';
import { Transpose } from './chordion/core/transpose';
import { ChordionDataService } from './chordion/services/chordion-data.service';
import { ChordionService } from './chordion/services/chordion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private chordionDataService: ChordionDataService,
    private chordionService: ChordionService
  ) {
    this.poc2();
  }

  poc2() {
    const keyboard = new Keyboard(88).keyboard;
    this.chordionDataService.currentKeyboard = keyboard;
    if (keyboard) {
      const cMajor = new Chord([
        keyboard['1C'],
        keyboard['1D#'],
        keyboard['1G'],
      ]);
      const transposedChord = new Transpose().chord(cMajor, 0, keyboard);
      console.log('transposedChord', transposedChord);
      const transposedKeys: string[] = transposedChord.keys!.map(
        (tk) => `${tk.octave}${tk.note}`
      );
      console.log('tranposedKeys', transposedKeys);
      this.chordionService.activateNotes(transposedKeys);
    }
  }
}
