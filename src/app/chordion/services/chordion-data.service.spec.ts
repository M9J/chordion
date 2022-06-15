import { TestBed } from '@angular/core/testing';

import { ChordionDataService } from './chordion-data.service';

describe('ChordionDataService', () => {
  let service: ChordionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
