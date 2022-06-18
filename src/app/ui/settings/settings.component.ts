import { Component, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(public chordionDataService: ChordionDataService) {}

  keyLabel = false;
  ngOnInit(): void {
    this.keyLabel = this.chordionDataService.settings.keyLabel;
  }

  toggleKeyLabel() {
    this.chordionDataService.settings.keyLabel =
      !this.chordionDataService.settings.keyLabel;
  }
}
