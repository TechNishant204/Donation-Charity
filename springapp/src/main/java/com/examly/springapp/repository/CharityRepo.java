package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Charity;

@Repository
public interface CharityRepo extends JpaRepository<Charity,Long>{

    public Charity findByCharityName(String charityName);
    public List<Charity> findAllByOrderByCharityName();
// public List<Charity    > findByUserUserId(Long userId);

}
