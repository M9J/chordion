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

    this.chordionService.activateNote('1C');
    this.chordionService.activateNote('1E');
    this.chordionService.activateNote('1G');

    this.chordionService.activateNotes(['2C', '2E', '2G']);
  }
}
