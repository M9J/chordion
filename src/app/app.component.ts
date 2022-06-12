import { Component } from '@angular/core';
import { Chord } from './chordion/core/chord';
import { KEYS } from './chordion/core/index';
import { Transpose } from './chordion/core/transpose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log('KEYS', KEYS);
    const cMajor = new Chord([KEYS[3]['C'], KEYS[3]['F'], KEYS[3]['G']]);
    console.log('cMajor.keys', cMajor.keys);
    const transposedChord = new Transpose().transposeChord(cMajor, 2);
    console.log('transposedChord', transposedChord);
  }
}
