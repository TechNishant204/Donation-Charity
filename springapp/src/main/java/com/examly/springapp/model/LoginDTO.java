package com.examly.springapp.model;

public class LoginDTO {
    private Long userId;
    private String username;
    private String email;
    private String role;
    private String token;

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public LoginDTO(String email, String role, String token) {
        this.email = email;
        this.role = role;
        this.token = token;
    }
    public LoginDTO(){
        
    }
}
