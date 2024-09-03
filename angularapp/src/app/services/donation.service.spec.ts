import { TestBed } from '@angular/core/testing';

import { DonationService } from './donation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DonationService', () => {
  let service: DonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DonationService);
  });

  fit('frontend_donation service should be created', () => {
    expect(service).toBeTruthy();
  });
});
