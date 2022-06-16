import { Key } from './key';

export class Chord {
  keys: Key[] | null = null;

  constructor(keys: Key[]) {
    this.keys = keys;
  }
}
