import { Injectable } from '@angular/core';
import { Key } from '../core/key';
import { Transpose } from '../core/transpose';
import { KEY_ERRORS } from '../errors/key-errors';
import { TRANSPOSE_ERRORS } from '../errors/transpose-errors';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';

@Injectable({
  providedIn: 'root',
})
export class ChordionService {
  constructor(private chordionDataService: ChordionDataService) {}

  next(fn: Function) {
    let t1 = setTimeout(() => {
      clearTimeout(t1);
      fn();
    }, 0);
  }

  activateNote(note: string) {
    if (note) {
      this.next(() => {
        if (this.chordionDataService.currentKeyboard) {
          if (this.chordionDataService.currentKeyboard[note]) {
            this.chordionDataService.currentKeyboard[note].isActive = true;
          } else {
            throw new Error(KEY_ERRORS.KEY_OUT_OF_RANGE);
          }
        }
      });
    }
  }

  activateNotes(chord: string[]) {
    if (chord) {
      for (let note of chord) {
        this.activateNote(note);
      }
    }
  }

  transpose(value: number) {
    const keysArray = Object.keys(this.chordionDataService.currentKeyboard);
    for (let key of keysArray) {
      const currentKey: Key = this.chordionDataService.currentKeyboard[key];
      if (currentKey.isActive) {
        let v = 0;
        if (value < 0) v = -1;
        else if (value > 0) v = 1; 
        const transposedKey = this.transposeKey(currentKey, v);
        if (transposedKey) {
          currentKey.isActive = false;
          this.activateNote(`${transposedKey.octave}${transposedKey.note}`);
        }
      }
    }
  }

  transposeKey(key: Key, value: number) {
    let transposedKey = key;
    const keyboard = this.chordionDataService.currentKeyboard;
    if (key && value && keyboard) {
      key.isTransposing = true;
      const keysArray = Object.keys(keyboard);
      const keyLabel = `${key.octave}${key.note}`;
      const keyIndex = keysArray.findIndex((k) => k === keyLabel);
      // const transposedKeyIndex = keyIndex + value;
      const transposedKeyIndex = keyIndex + value;
      const transposedKeyLabel = keysArray[transposedKeyIndex];
      transposedKey = keyboard[transposedKeyLabel];
      if (!transposedKey) {
        throw new Error(TRANSPOSE_ERRORS.KEY_OUT_OF_RANGE);
      }
    }
    return transposedKey;
  }
}
