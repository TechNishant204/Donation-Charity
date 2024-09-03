package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.CharityAlreadyExistsException;
import com.examly.springapp.model.Charity;
import com.examly.springapp.repository.CharityRepo;

@Service("charityServiceImpl")
public class CharityServiceImpl implements CharityService{

    @Autowired CharityRepo charityRepo;

    @Override
    public Charity addCharity(Charity charity) {
        Charity existingCharity=charityRepo.findByCharityName(charity.getCharityName());

        if(existingCharity!=null){
            throw new CharityAlreadyExistsException("Charity with the same name already exists");
        }
        else{
            return charityRepo.save(charity);
        }
    }

    @Override
    public List<Charity> getAllCharaties() {
        return charityRepo.findAllByOrderByCharityName();
    }

    

    @Override
    public Charity editCharity(Long charityId, Charity updatedCharity) {
        updatedCharity.setCharityId(charityId);
        return charityRepo.save(updatedCharity);
    }

    @Override
    public Charity deleteCharity(Long charityId) {

        Optional<Charity> c = charityRepo.findById(charityId);
        if(c.isPresent()){
            charityRepo.deleteById(charityId);
            return c.get();
        }
        else{
            return null;
        }
    }

   
    public Charity getCharityById(Long charityId){
        Optional<Charity> c= charityRepo.findById(charityId);

        if(c.isPresent()){
            return c.get();
        }
        else return null;
    }

}
