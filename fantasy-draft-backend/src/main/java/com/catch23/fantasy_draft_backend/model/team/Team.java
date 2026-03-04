package com.catch23.fantasy_draft_backend.model;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*; // this might have to be javax.persistence.*

// Database connection
@Entity
@Table(name = "teams")

public class Team {
    // Post MVP:
        // they should be able to add how many players as they would like, therefore the enum should dynamically change

    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "league_id")
    private League league;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private double budget;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<DraftPick> players = new ArrayList<>();

    // Constructors
    public Team() {

    }

    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public String getName() { return name; }
    public double getBudget() { return budget; }
    public List<DraftPick> getPlayers() { return players; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setName(String name) { this.name = name; }
    public void setBudget(double budget) { this.budget = budget; }
    public void setPlayers(List<DraftPick> players) { this.players = players; }

    // Helper Methods
    @Transient
    public int getNumKeepers() {
        int count = 0;
        for(DraftPick player: players) {
            if(player.getPlayer().isKeeper()) count++;
        }
        return count;
    }
}