import { TestBed } from '@angular/core/testing';

import { MedicineserverService } from './medicineserver.service';

describe('MedicineserverService', () => {
  let service: MedicineserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
