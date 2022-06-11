import { Key } from './key';
import { KEYS_ARR } from './index';

export class Chord {
  keys: Key[] | null = null;

  constructor(keys: Key[]) {
    this.keys = keys;
  }
}
