import { TestBed } from '@angular/core/testing';

import { ServiceProduitsService } from './service-produits.service';

describe('ServiceProduitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProduitsService = TestBed.get(ServiceProduitsService);
    expect(service).toBeTruthy();
  });
});
