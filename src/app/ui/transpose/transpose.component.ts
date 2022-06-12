import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.scss'],
})
export class TransposeComponent implements OnInit {
  transposeValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  decrement() {
    --this.transposeValue;
  }

  increment() {
    ++this.transposeValue;
  }
}
