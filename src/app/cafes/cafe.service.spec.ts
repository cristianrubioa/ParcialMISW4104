import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe.service';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';


describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([]), 
      ],
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
