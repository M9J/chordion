import { Component, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-chord-notes',
  templateUrl: './chord-notes.component.html',
  styleUrls: ['./chord-notes.component.scss'],
})
export class ChordNotesComponent implements OnInit {
  chordNotes: string = '';

  constructor(private chordionService: ChordionService) {}

  ngOnInit(): void {}

  parseChordNotes(event: any) {
    this.chordNotes = event ? event?.target?.value : this.chordNotes;
    console.log('chordNotes', this.chordNotes);
    const splitChordNotes = this.chordNotes
      .split(',')
      .map((v) => v.trim())
      .map((v) => v.toUpperCase());
    this.chordionService.resetActiveNotes();
    const transposedChordNotes =
      this.chordionService.transposeNotes(splitChordNotes);
    console.log('transposedChordNotes', transposedChordNotes);
    this.chordionService.activateNotes(transposedChordNotes);
  }
}
