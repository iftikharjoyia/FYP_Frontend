import { TestBed } from '@angular/core/testing';

import { AgentregisterationService } from './agentregisteration.service';

describe('AgentregisterationService', () => {
  let service: AgentregisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentregisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
