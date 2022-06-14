import { TRANSPOSE_ERRORS } from '../errors/transpose-errors';
import { Chord } from './chord';
import { Key } from './key';

export class Transpose {
  constructor() { }

  chord(chord: Chord, value: number, keyboard: any) {
    const transposedKeys: any = [];
    if (chord.keys) {
      for (let key of chord.keys) {
        const transposedKey = this.key(key, value, keyboard);
        if (transposedKey) {
          transposedKeys.push(transposedKey);
        }
      }
    }
    return new Chord(transposedKeys);
  }

  key(key: Key, value: number, keyboard: any) {
    let transposedKey = key;
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
