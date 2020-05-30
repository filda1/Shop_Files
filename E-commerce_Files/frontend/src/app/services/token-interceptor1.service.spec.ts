import { TestBed } from '@angular/core/testing';

import { TokenInterceptor1Service } from './token-interceptor1.service';

describe('TokenInterceptor1Service', () => {
  let service: TokenInterceptor1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptor1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
