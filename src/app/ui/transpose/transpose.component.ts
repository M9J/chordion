import { Component, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.scss'],
})
export class TransposeComponent implements OnInit {
  transposeValue: number = 0;

  constructor(
    private chordionService: ChordionService,
    private chordionDataService: ChordionDataService
  ) {}

  ngOnInit(): void {}

  decrement() {
    --this.transposeValue;
    this.chordionDataService.currentTranspose = this.transposeValue;
    this.chordionService.transposeStep(-1);
  }

  increment() {
    ++this.transposeValue;
    this.chordionDataService.currentTranspose = this.transposeValue;
    this.chordionService.transposeStep(+1);
  }
}
