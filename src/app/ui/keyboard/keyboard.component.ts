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
    const keyboardContainer = document.getElementById('keyboard-container');
    if (keyboardContainer)
      keyboardContainer.addEventListener(
        'wheel',
        this.onMouseWheelScroll.bind(this)
      );
  }

  onMouseWheelScroll(e: any) {
    const keyboardContainer = document.getElementById('keyboard-container');
    if (keyboardContainer) {
      // if (e.deltaY > 0) keyboardContainer.scrollLeft += 100;
      // else keyboardContainer.scrollLeft -= 100;
      if (e.deltaY > 0 || e.deltaX > 0)
        keyboardContainer.scrollLeft += e.deltaY;
      else keyboardContainer.scrollLeft += e.deltaY;
    }
  }

  removeEventListeners() {
    const keyboardContainer = document.getElementById('keyboard-container');
    if (keyboardContainer)
      keyboardContainer.removeEventListener(
        'wheel',
        this.onMouseWheelScroll.bind(this)
      );
  }
}
