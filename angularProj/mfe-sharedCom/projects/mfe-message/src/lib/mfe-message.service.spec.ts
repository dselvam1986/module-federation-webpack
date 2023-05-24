import { TestBed } from '@angular/core/testing';

import { MfeMessageService } from './mfe-message.service';

describe('MfeMessageService', () => {
  let service: MfeMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
