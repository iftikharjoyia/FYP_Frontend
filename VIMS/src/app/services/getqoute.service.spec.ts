import { TestBed } from '@angular/core/testing';

import { GetqouteService } from './getqoute.service';

describe('GetqouteService', () => {
  let service: GetqouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetqouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
