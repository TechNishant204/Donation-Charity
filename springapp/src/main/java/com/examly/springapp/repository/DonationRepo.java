package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Donation;

@Repository
public interface DonationRepo extends JpaRepository<Donation,Long>{

    List<Donation> findByUserUserIdOrderByAmountDesc(Long userId);
    List<Donation> findByCharityCharityId(Long charityId);
    List<Donation> findAllByOrderByAmountDesc();

}
