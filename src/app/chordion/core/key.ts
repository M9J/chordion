export class Key {
  value: number | null = null;
  note: string | null = null;
  octave: number | null = null;
  color: number | null = null;
  isActive: boolean = false;
  isTransposing: boolean = false;

  constructor(note: string, octave: number, color: number) {
    this.value = 0.5;
    this.note = note;
    this.octave = octave;
    this.color = color;
  }
}
