import { Component, OnInit } from '@angular/core';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.scss'],
})
export class TransposeComponent implements OnInit {
  transposeValue: number = 0;

  constructor(private chordionService: ChordionService) {}

  ngOnInit(): void {}

  decrement() {
    // this.chordionService.transpose(--this.transposeValue);
    --this.transposeValue;
    this.chordionService.transpose(-1);
  }

  increment() {
    // this.chordionService.transpose(++this.transposeValue);
    ++this.transposeValue;
    this.chordionService.transpose(+1);
  }
}
