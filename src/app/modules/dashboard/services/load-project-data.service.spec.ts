import { TestBed, inject } from '@angular/core/testing';

import { LoadProjectDataService } from './load-project-data.service';

describe('LoadProjectDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadProjectDataService]
    });
  });

  it('should be created', inject([LoadProjectDataService], (service: LoadProjectDataService) => {
    expect(service).toBeTruthy();
  }));
});
