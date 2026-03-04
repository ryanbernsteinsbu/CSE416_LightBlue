package com.catch23.fantasy_draft_backend.model;

public class DraftSettings{
    // Fields
    private Long id;
    private League league;
    private double budget;
    private int numTeams;

    // Constructors
    public DraftSettings() {
        
    }

    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public double getBudget() { return budget; }
    public int getNumTeams() { return numTeams; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setBudget(double budget) { this.budget = budget; }
    public void setNumTeams(int numTeams) { this.numTeams = numTeams; }
}