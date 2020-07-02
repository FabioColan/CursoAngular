import { TestBed } from '@angular/core/testing';

import { LoadingScreenInterceptorService } from './loading-screen-interceptor.service';

describe('LoadingScreenInterceptorService', () => {
  let service: LoadingScreenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingScreenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
