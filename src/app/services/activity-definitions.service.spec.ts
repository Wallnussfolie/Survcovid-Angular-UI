import { TestBed } from '@angular/core/testing';

import { ActivityDefinitionsService } from './activity-definitions.service';

describe('ActivityDefinitionsService', () => {
  let service: ActivityDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
