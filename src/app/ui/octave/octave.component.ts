import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-octave',
  templateUrl: './octave.component.html',
  styleUrls: ['./octave.component.scss']
})
export class OctaveComponent implements OnInit {

  octaves = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
