import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordNotesComponent } from './chord-notes.component';

describe('ChordNotesComponent', () => {
  let component: ChordNotesComponent;
  let fixture: ComponentFixture<ChordNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
