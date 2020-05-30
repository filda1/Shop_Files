import { TestBed } from '@angular/core/testing';

import { SearchproductsService } from './searchproducts.service';

describe('SearchproductsService', () => {
  let service: SearchproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
