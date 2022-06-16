import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChordionDataService } from 'src/app/chordion/services/chordion-data.service';
import { ChordionService } from 'src/app/chordion/services/chordion.service';

@Component({
  selector: 'ui-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, OnDestroy {
  keyboard: any = null;
  keysArray: any = [];
  keysArrayTemp: any = [];

  constructor(public chordionDataService: ChordionDataService) {}

  ngOnInit(): void {
    this.keyboard = this.chordionDataService.currentKeyboard;
    if (this.keyboard) this.keysArray = Object.values(this.keyboard);
    this.addEventListeners();
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheelScroll.bind(this));
  }

  onMouseWheelScroll(e: any) {
    const item = document.getElementById('keyboard-container');
    if (item) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    }
  }

  removeEventListeners() {
    window.removeEventListener('wheel', this.onMouseWheelScroll.bind(this));
  }
}
