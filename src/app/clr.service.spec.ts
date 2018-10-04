import { TestBed } from '@angular/core/testing';

import { ClrService } from './clr.service';

describe('ClrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClrService = TestBed.get(ClrService);
    expect(service).toBeTruthy();
  });
});
