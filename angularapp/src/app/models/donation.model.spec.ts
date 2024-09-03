import { Donation } from './donation.model';

describe('Donation Model', () => {

  fit('frontend_donation model should create an instance', () => {
    // Create a sample user object
    const donation: Donation = {
        amount : 1000
    };

    expect(donation).toBeTruthy();
    expect(donation.amount).toBe(1000);

  });
});
