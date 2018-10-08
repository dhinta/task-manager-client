import { TestBed, inject } from '@angular/core/testing';

import { ValidationRulesResolverService } from './validation-rules-resolver.service';

describe('ValidationRulesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationRulesResolverService]
    });
  });

  it('should be created', inject([ValidationRulesResolverService], (service: ValidationRulesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
