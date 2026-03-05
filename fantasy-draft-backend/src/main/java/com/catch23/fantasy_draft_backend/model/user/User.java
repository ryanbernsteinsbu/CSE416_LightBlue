package com.catch23.fantasy_draft_backend.model;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*; // this might have to be javax.persistence.*

// Database connection
@Entity
@Table(name = "users")

public class User {
    // Features
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String hashedPassword;

    @Column(nullable = false)
    private String displayName;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<League> leagues = new ArrayList<>();

    // Constructors
    public User() {}

    // Getters
    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getHashedPassword() { return hashedPassword; }
    public String getDisplayName() { return displayName; }
    public List<League> getLeagues() { return leagues; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setEmail(String email) { this.email = email; }
    public void setHashedPassword(String hashedPassword) { this.hashedPassword = hashedPassword; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }
    public void setLeagues(List<League> leagues) { this.leagues = leagues; }
}