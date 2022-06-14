import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-key-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.scss'],
})
export class BlackComponent implements OnInit {
  @Input() key: any = {
    isActive: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
