import { TestBed } from '@angular/core/testing';

import { EventDefinitionService } from './event-definition.service';

describe('EventDefinitionService', () => {
  let service: EventDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
