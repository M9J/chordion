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
const KEYS_88 = [
  new Key('A', 0, Color.WHITE),
  new Key('A#', 0, Color.BLACK),
  new Key('B', 0, Color.WHITE),
  ...OCTAVE(1),
  ...OCTAVE(2),
  ...OCTAVE(3),
  ...OCTAVE(4),
  ...OCTAVE(5),
  ...OCTAVE(6),
  ...OCTAVE(7),
  new Key('C', 8, Color.WHITE),
];

export const KEYS_ARR: Key[] = KEYS_88;
export const KEYS = (() => {
  let mappedKeys: any = {};
  for (let key of KEYS_ARR) {
    const note = key.note;
    const octave = key.octave;
    if (note && octave != null) {
      if (mappedKeys[octave] === undefined) {
        mappedKeys[octave] = {};
      }
      mappedKeys[octave][note] = key;
    }
  }
  return mappedKeys;
})();

export function findKeyIndexFromKeys(key: Key) {
  const indexFn = (k: Key) => k.note === key.note && k.octave === key.octave;
  return KEYS_ARR.findIndex(indexFn);
}
