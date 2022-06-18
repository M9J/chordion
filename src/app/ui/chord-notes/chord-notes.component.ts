import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-chord-notes',
  templateUrl: './chord-notes.component.html',
  styleUrls: ['./chord-notes.component.scss'],
})
export class ChordNotesComponent implements OnInit {
  chordNotes: string = '';

  constructor() {}

  ngOnInit(): void {
    this.chordNotes = '2C#, 4B, 5G#';
  }

  parseChordNotes() {
    const splitChordNotes = this.chordNotes.split(',').map(v => v.trim());
    console.log('splitChordNotes', splitChordNotes);
    if (splitChordNotes) {
      
    }
  }
}
