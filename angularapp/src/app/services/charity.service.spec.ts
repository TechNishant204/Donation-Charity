import { TestBed } from '@angular/core/testing';

import { CharityService } from './charity.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharityService', () => {
  let service: CharityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharityService);
  });

  fit('frontend_charity service should be created', () => {
    expect(service).toBeTruthy();
  });
});
