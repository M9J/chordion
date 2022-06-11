import { Chord } from './chord';
import { findKeyIndexFromKeys, KEYS_ARR } from './index';
import { Key } from './key';
import { TRANSPOSE_ERRORS } from '../errors/transpose-errors';

export class Transpose {
  transposeChord(chord: Chord, value: number): Key[] {
    const transposedChords: Key[] = [];
    if (chord.keys) {
      for (let key of chord.keys) {
        const transposedKey = this.transposeKey(key, value);
        if (transposedKey) {
          transposedChords.push(transposedKey);
        }
      }
    }
    return transposedChords;
  }

  transposeKey(key: Key, value: number): Key {
    let transposedKey: Key = key;
    if (key && value) {
      const keyIndex = findKeyIndexFromKeys(key);
      const transposedKeyIndex = keyIndex + value;
      transposedKey = KEYS_ARR[transposedKeyIndex];
      if (!transposedKey) {
        throw new Error(TRANSPOSE_ERRORS.KEY_OUT_OF_RANGE);
      }
    }
    return transposedKey;
  }
}
