import { TestBed, inject } from '@angular/core/testing';

import { ModellService } from './modell.service';

describe('ModellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModellService]
    });
  });

  it('should be created', inject([ModellService], (service: ModellService) => {
    expect(service).toBeTruthy();
  }));
});
