import { TestBed } from '@angular/core/testing';

import { ChordionService } from './chordion.service';

describe('ChordionService', () => {
  let service: ChordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
