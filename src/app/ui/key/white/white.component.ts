import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-key-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.scss'],
})
export class WhiteComponent implements OnInit {
  @Input() isActive = false;

  constructor() {}

  ngOnInit(): void {}
}
