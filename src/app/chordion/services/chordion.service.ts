import { Injectable } from '@angular/core';
import { KEY_ERRORS } from '../errors/key-errors';

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
      }, 1000);
    }
  }

  activateNotes(chord: string[]) {
    if (chord) {
      for (let note of chord) {
        this.activateNote(note);
      }
    }
  }
}
