package com.examly.springapp.model;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationId;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name="charity_id")
    private Charity charity;
    private LocalDate donationDate;
    private Double amount;
    public Donation() {
    }
    public Donation(User user, Charity charity, LocalDate donationDate, Double amount) {
        this.user = user;
        this.charity = charity;
        this.donationDate = donationDate;
        this.amount = amount;
    }
    public Long getDonationId() {
        return donationId;
    }
    public void setDonationId(Long donationId) {
        this.donationId = donationId;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Charity getCharity() {
        return charity;
    }
    public void setCharity(Charity charity) {
        this.charity = charity;
    }
    public LocalDate getDonationDate() {
        return donationDate;
    }
    public void setDonationDate(LocalDate donationDate) {
        this.donationDate = donationDate;
    }
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    

}
