import { TestBed } from '@angular/core/testing';

import { BiddeService } from './bidde.service';

describe('BiddeService', () => {
  let service: BiddeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiddeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
