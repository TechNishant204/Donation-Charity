package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Charity;

public interface CharityService {

    Charity addCharity(Charity charity);
    List<Charity> getAllCharaties();
    Charity editCharity(Long charityId,Charity updatedCharity);
    Charity deleteCharity(Long charityId);
    Charity getCharityById(Long charityId);


}
