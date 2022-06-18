import { Component, Input, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';

@Component({
  selector: 'ui-key-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.scss'],
})
export class BlackComponent implements OnInit {
  @Input() key: any = {
    isActive: false,
  };

  constructor(public chordionDataService: ChordionDataService) {}

  ngOnInit(): void {}
}
