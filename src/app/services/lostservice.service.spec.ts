import { TestBed } from '@angular/core/testing';

import { LostserviceService } from './lostservice.service';

describe('LostserviceService', () => {
  let service: LostserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LostserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
