package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Donation;

public interface DonationService {

    Donation addDonation(Long userId, Long charityId, Donation donation);
    List<Donation> getAllDonations();
    List<Donation> getAllDonationsByUserId(Long userId);
    List<Donation> getAllDonationsByCharityId(Long charityId);
    Donation getDonationById(Long donationId);

}
