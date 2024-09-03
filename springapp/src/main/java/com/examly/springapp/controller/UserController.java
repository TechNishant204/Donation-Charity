package com.examly.springapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/api/welcome")
    public ResponseEntity<?> welcomeEndPoint(){
        return ResponseEntity.status(HttpStatus.OK).body("Welcome to this application");
    }

    @GetMapping("/api/user")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<?> userEndPoint(){
        return ResponseEntity.status(HttpStatus.OK).body("User endpoint accessed");
    }
    
    @GetMapping("/api/admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> adminEndPoint(){
        return ResponseEntity.status(HttpStatus.OK).body("Admin endpoint accessed");
    }
}
