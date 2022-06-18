import { Component, Input, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';

@Component({
  selector: 'ui-key-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.scss'],
})
export class WhiteComponent implements OnInit {
  @Input() key: any = {
    isActive: false,
  };

  constructor(public chordionDataService: ChordionDataService) {}

  ngOnInit(): void {}
}
