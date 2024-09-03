package com.examly.springapp.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.configuration.JwtUtils;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import com.examly.springapp.utils.Utils;

@CrossOrigin(origins = Utils.FRONTEND, allowedHeaders ="*")
@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtils jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    
    @PostMapping("/api/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        //System.out.println("************Register : "+user);
        User u = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(u);
    }

    @PostMapping("/api/login")
    public LoginDTO authenticateAndGetToken(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if(authentication.isAuthenticated()){
            User u = userService.getUserByEmail(user.getEmail());
            LoginDTO loginDTO = new LoginDTO();
            loginDTO.setUserId(u.getUserId());
            loginDTO.setUsername(u.getUsername());
            loginDTO.setEmail(u.getEmail());
            loginDTO.setRole(userService.getUserRoleByEamil(u.getEmail()));
            loginDTO.setToken(jwtService.generateToken(u.getEmail()));
            return loginDTO;
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
    
}
