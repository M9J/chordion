import { Color } from './color';
import { Key } from './key';
import { Octave } from './octave';

export class Keyboard {
  keyboard: any = null;

  constructor(size: number) {
    if (size === 61) this.keyboard = this.createKeyboard61();
    else if (size === 88) this.keyboard = this.createKeyboard88();
  }


  private createKeyboard61() {
    return {
      ...new Octave().generateOctave(1),
      ...new Octave().generateOctave(2),
      ...new Octave().generateOctave(3),
      ...new Octave().generateOctave(4),
      ...new Octave().generateOctave(5),
      '6C': new Key('C', 6, Color.WHITE),
    };
  }

  private createKeyboard88() {
    return {
      '0A': new Key('A', 0, Color.WHITE),
      '0A#': new Key('A#', 0, Color.BLACK),
      '0B': new Key('B', 0, Color.WHITE),
      ...new Octave().generateOctave(1),
      ...new Octave().generateOctave(2),
      ...new Octave().generateOctave(3),
      ...new Octave().generateOctave(4),
      ...new Octave().generateOctave(5),
      ...new Octave().generateOctave(6),
      ...new Octave().generateOctave(7),
      '8C': new Key('C', 8, Color.WHITE),
    };
  }
}
