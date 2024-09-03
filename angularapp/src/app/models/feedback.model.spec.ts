import { Feedback } from './feedback.model';

describe('Feedback Model', () => {

  fit('frontend_feedback model should create an instance', () => {
    // Create a sample user object
    const feedback: Feedback = {
        feedbackText:'Good'
    };

    expect(feedback).toBeTruthy();
    expect(feedback.feedbackText).toBe('Good');

  });
});
