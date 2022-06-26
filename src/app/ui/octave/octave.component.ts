import { Component, Input, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';

@Component({
  selector: 'ui-octave',
  templateUrl: './octave.component.html',
  styleUrls: ['./octave.component.scss'],
})
export class OctaveComponent implements OnInit {
  @Input() octavesArray: string[] = [];
  @Input() octave: any = {};
  @Input() octaveIndex: number = 0;
  keyboard: any = null;

  constructor(private chordionDataService: ChordionDataService) {}

  ngOnInit(): void {
    this.keyboard = this.chordionDataService.currentKeyboard;
    this.octavesArray = Object.keys(this.octave);
    this.octavesArray = this.octavesArray.map((k) => `${this.octaveIndex}${k}`);
    // console.log('this.octave', this.octave);
    // console.log('this.octavesArray', this.octavesArray);
  }
}
