import { TestBed } from '@angular/core/testing';

import { ContactusServiceService } from './contactus-service.service';

describe('ContactusServiceService', () => {
  let service: ContactusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
