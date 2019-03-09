import { TestBed, inject } from '@angular/core/testing';

import { LoadUserDataService } from './load-user-data.service';

describe('LoadUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadUserDataService]
    });
  });

  it('should be created', inject([LoadUserDataService], (service: LoadUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
