import { TestBed } from '@angular/core/testing';

import { PorductService } from './cashier-app/porduct.service';

describe('PorductService', () => {
  let service: PorductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
