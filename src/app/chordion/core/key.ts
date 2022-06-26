import { ChordionDataService } from '../services/chordion-data.service';
import { Keyboard } from './keyboard';

export class Key {
  protected value: number = 0.5;
  note: string | null = null;
  octave: number | null = null;
  color: number | null = null;
  transposedValue: number = 0;
  keyboard: Keyboard | null = null;
  isActive: boolean = false;
  isTransposing: boolean = false;

  constructor(
    note: string,
    octave: number,
    color: number,
    private chordionDataService?: ChordionDataService
  ) {
    this.note = note;
    this.octave = octave;
    this.color = color;
    if (this.chordionDataService) {
      this.keyboard = this.chordionDataService.currentKeyboard;
    }
  }

  press(): void {
    this.isActive = true;
  }

  release(): void {
    this.isActive = false;
  }

  transpose(transposedValue: number): void {
    this.transposedValue = transposedValue;
    this.isTransposing = true;
    if (this.keyboard) {
      const transposedKey = this.keyboard;
      console.log(this.keyboard);
    }
  }

  resetTranspose(): void {
    this.transposedValue = 0;
    this.isTransposing = false;
  }
}
