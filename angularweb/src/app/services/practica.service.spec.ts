import { TestBed } from '@angular/core/testing';

import { PracticaService } from './practica.service';

describe('PracticaService', () => {
  let service: PracticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
