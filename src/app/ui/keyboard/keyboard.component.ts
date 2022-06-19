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
  octavesArray: number[] = [];
  octaves: any = {};

  constructor(public chordionDataService: ChordionDataService) {}

  ngOnInit(): void {
    this.keyboard = this.chordionDataService.currentKeyboard;
    if (this.keyboard) this.keysArray = Object.values(this.keyboard);
    if (this.keyboard) {
      for (const key in this.keyboard) {
        if (!this.octavesArray.includes(parseInt(key))) {
          this.octavesArray.push(parseInt(key));
          this.octaves[parseInt(key)] = {};
        }
        this.octaves[parseInt(key)][this.keyboard[key].note] =
          this.keyboard[key];
      }
    }
    console.log(this.octavesArray);
    console.log(this.octaves);
    // this.addEventListeners();
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
