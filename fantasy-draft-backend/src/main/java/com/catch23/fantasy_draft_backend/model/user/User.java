package com.catch23.fantasy_draft_backend.model;

import java.util.ArrayList;
import java.util.List;

public class User {
    // Features
    private Long id;
    private String email;
    private String username;
    private String hashedPassword;
    private String displayName;
    private List<League> leagues = new ArrayList<>();

    // Constructors
    public User() {}

    // Getters
    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
    public String getHashedPassword() { return hashedPassword; }
    public String getDisplayName() { return displayName; }
    public List<League> getLeagues() { return leagues; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setEmail(String email) { this.email = email; }
    public void setUsername(String username) { this.username = username; }
    public void setHashedPassword(String hashedPassword) { this.hashedPassword = hashedPassword; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }
    public void setLeagues(List<League> leagues) { this.leagues = leagues; }
}