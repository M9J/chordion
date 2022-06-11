import { Color } from './color';
import { Key } from './key';

const OCTAVE = (o: number) => [
  new Key('C', o, Color.WHITE),
  new Key('C#', o, Color.BLACK),
  new Key('D', o, Color.WHITE),
  new Key('D#', o, Color.BLACK),
  new Key('E', o, Color.WHITE),
  new Key('F', o, Color.WHITE),
  new Key('F#', o, Color.BLACK),
  new Key('G', o, Color.WHITE),
  new Key('G#', o, Color.BLACK),
  new Key('A', o, Color.WHITE),
  new Key('A#', o, Color.BLACK),
  new Key('B', o, Color.WHITE),
];

const KEYS_61 = [
  ...OCTAVE(1),
  ...OCTAVE(2),
  ...OCTAVE(3),
  ...OCTAVE(4),
  ...OCTAVE(5),
  new Key('C', 6, Color.WHITE),
];

export const KEYS_ARR: Key[] = KEYS_61;
export const KEYS = (() => {
  let mappedKeys: any = {};
  for (let key of KEYS_ARR) {
    const note = key.note;
    const octave = key.octave;
    if (note && octave) {
      if (!mappedKeys[octave]) {
        mappedKeys[octave] = {};
      }
      mappedKeys[octave][note] = key;
    }
  }
  return mappedKeys;
})();

export function findKeyIndexFromKeys(key: Key) {
  return KEYS_ARR.findIndex((k) => k.note === key.note && k.octave === key.octave);
}
