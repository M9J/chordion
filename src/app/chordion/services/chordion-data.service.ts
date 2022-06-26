import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChordionDataService {
  private _currentKeyboard: any = null;
  private _currentTranspose: number = 0;
  public settings = {
    keyLabel: false
  };

  set currentKeyboard(keyboard) {
    this._currentKeyboard = keyboard;
  }

  get currentKeyboard() {
    return this._currentKeyboard;
  }

  set currentTranspose(chords: any) {
    this._currentTranspose = chords;
  }

  get currentTranspose() {
    return this._currentTranspose;
  }
}
