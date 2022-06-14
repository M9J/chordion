import { Component, OnInit } from '@angular/core';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  keyboard: any = null;
  keysArray: any = [];

  constructor(public chordionService: ChordionService) {}

  ngOnInit(): void {
    this.keyboard = this.chordionService.currentKeyboard;
    if (this.keyboard) this.keysArray = Object.values(this.keyboard);

    // this.chordionService.activateNotes(['1C', '1E', '1G']);
    // this.chordionService.activateNotes(['3C', '3E', '3G']);
    // this.chordionService.activateNotes(['5C', '5E', '5G']);
    // this.chordionService.activateNotes(['7C', '7E', '7G']);
  }
}
