import { Color } from './color';
import { Key } from './key';

export class Octave {
  generateOctave(n: number) {
    const o: any = {};
    o[`${n}C`] = new Key('C', n, Color.WHITE);
    o[`${n}C#`] = new Key('C#', n, Color.BLACK);
    o[`${n}D`] = new Key('D', n, Color.WHITE);
    o[`${n}D#`] = new Key('D#', n, Color.BLACK);
    o[`${n}E`] = new Key('E', n, Color.WHITE);
    o[`${n}F`] = new Key('F', n, Color.WHITE);
    o[`${n}F#`] = new Key('F#', n, Color.BLACK);
    o[`${n}G`] = new Key('G', n, Color.WHITE);
    o[`${n}G#`] = new Key('G#', n, Color.BLACK);
    o[`${n}A`] = new Key('A', n, Color.WHITE);
    o[`${n}A#`] = new Key('A#', n, Color.BLACK);
    o[`${n}B`] = new Key('B', n, Color.WHITE);
    return o;
  }
}
