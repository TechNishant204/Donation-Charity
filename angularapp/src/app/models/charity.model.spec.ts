import { Charity } from './charity.model';

describe('Charity Model', () => {

  fit('frontend_charity model should create an instance', () => {
    // Create a sample user object
    const charity: Charity = {
        status :'Active'
    };

    expect(charity).toBeTruthy();
    expect(charity.status).toBe('Active');

  });
});
