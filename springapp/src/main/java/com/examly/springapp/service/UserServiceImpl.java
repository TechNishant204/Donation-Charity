package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.UserExistException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service("userServiceImpl")
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder; 

    @Override
    public User registerUser(User user) {
        User existUser = userRepo.findByEmail(user.getEmail()).orElse(null); 
        if(existUser != null){ 
            throw new UserExistException(); 
        } 
        user.setPassword(passwordEncoder.encode(user.getPassword())); 
        return userRepo.save(user);
    }

    @Override
    public User loginUser(User user) {
        //throw new UnsupportedOperationException("Unimplemented method 'loginUser'");
        return null;
    }

    @Override
    public String getUserRoleByEamil(String email) {
       User u = userRepo.findByEmail(email).orElse(null);
       if(u != null){
        return u.getRole();
       }else{
        return null;
       }
    }

    @Override
    public User getUserByEmail(String email){
        User user = userRepo.findByEmail(email).orElse(null);
        if(user != null){
            return user;
        }else{
            return null;
        }
    }

}
