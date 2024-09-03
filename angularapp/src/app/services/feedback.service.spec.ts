import { TestBed } from '@angular/core/testing';

import { FeedbackService } from './feedback.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeedbackService', () => {
  let service: FeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FeedbackService);
  });

  fit('frontend_feedback service should be created', () => {
    expect(service).toBeTruthy();
  });
});
