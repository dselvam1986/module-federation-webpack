import { TestBed } from '@angular/core/testing';

import { ComLibService } from './com-lib.service';

describe('ComLibService', () => {
  let service: ComLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
