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

  next(fn: Function): void {
    let t1 = setTimeout(() => {
      clearTimeout(t1);
      fn();
    }, 0);
  }

  activateNote(note: string): void {
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

  activateNotes(chord: string[]): void {
    if (chord) {
      for (let note of chord) {
        this.activateNote(note);
      }
    }
  }

  resetActiveNotes() {
    const keyboard = this.chordionDataService.currentKeyboard;
    if (keyboard) {
      const keys = Object.keys(keyboard);
      // console.log(keys);
      keys.forEach((key) => {
        if (keyboard[key].isActive)
          this.chordionDataService.currentKeyboard[key].isActive = false;
      });
    }
  }

  transposeNotes(notes: string[]): string[] {
    let transposedNotes: string[] = [];
    const transposedKeys: Key[] = [];
    const currentTransponse: number = this.chordionDataService.currentTranspose;
    if (currentTransponse) {
      notes.forEach((note) => {
        const keyboard = this.chordionDataService.currentKeyboard;
        const key = keyboard[note];
        if (key) {
          const keysArray = Object.keys(keyboard);
          const keyLabel = `${key.octave}${key.note}`;
          const keyIndex = keysArray.findIndex((k) => k === keyLabel);
          const transposedKeyIndex = keyIndex + currentTransponse;
          const transposedKeyLabel = keysArray[transposedKeyIndex];
          const transposedKey = keyboard[transposedKeyLabel];
          if (!transposedKey) {
            throw new Error(TRANSPOSE_ERRORS.KEY_OUT_OF_RANGE);
          } else {
            // transposedKey.isActive = true;
            this.chordionDataService.currentKeyboard[
              `${transposedKey.octave}${transposedKey.note}`
            ].isActive = true;
            transposedKeys.push(transposedKey);
          }
        }
      });
    }
    if (transposedKeys.length > 0) {
      transposedNotes = transposedKeys.map((k) => `${k.octave}${k.note}`);
    } else {
      transposedNotes = notes;
    }
    return transposedNotes;
  }

  transposeStep(value: number): void {
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

  transposeKey(key: Key, value: number): Key {
    let transposedKey: Key = key;
    const keyboard = this.chordionDataService.currentKeyboard;
    if (key && value && keyboard) {
      key.isTransposing = true;
      const keysArray = Object.keys(keyboard);
      const keyLabel = `${key.octave}${key.note}`;
      const keyIndex = keysArray.findIndex((k) => k === keyLabel);
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
