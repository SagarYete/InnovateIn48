import { TestBed } from '@angular/core/testing';

import { SmartbotServiceService } from './smartbot-service.service';

describe('SmartbotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartbotServiceService = TestBed.get(SmartbotServiceService);
    expect(service).toBeTruthy();
  });
});
