import { TestBed } from '@angular/core/testing';

import { httpservice } from '../httpservice/httpservice.service';

describe('Httpservice', () => {
  let service: httpservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(httpservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
