import { Injectable } from '@angular/core';
import { Key } from '../core/key';
import { Transpose } from '../core/transpose';
import { KEY_ERRORS } from '../errors/key-errors';
import { TRANSPOSE_ERRORS } from '../errors/transpose-errors';

@Injectable({
  providedIn: 'root',
})
export class ChordionService {
  private _currentKeyboard: any = null;

  set currentKeyboard(keyboard) {
    this._currentKeyboard = keyboard;
  }

  get currentKeyboard() {
    return this._currentKeyboard;
  }

  activateNote(note: string) {
    if (note) {
      let t1 = setTimeout(() => {
        clearTimeout(t1);
        if (this.currentKeyboard) {
          if (this.currentKeyboard[note]) {
            this.currentKeyboard[note].isActive = true;
          } else {
            throw new Error(KEY_ERRORS.KEY_OUT_OF_RANGE);
          }
        }
      }, 0);
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
    const keysArray = Object.keys(this.currentKeyboard);
    for (let key of keysArray) {
      const currentKey: Key = this.currentKeyboard[key];
      if (currentKey.isActive) {
        const transposedKey = this.transposeKey(currentKey, value);
        if (transposedKey) {
          currentKey.isActive = false;
          this.activateNote(`${transposedKey.octave}${transposedKey.note}`);
        }
      }
    }
  }

  transposeKey(key: Key, value: number) {
    let transposedKey = key;
    const keyboard = this.currentKeyboard;
    if (key && value && keyboard) {
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
