package com.catch23.fantasy_draft_backend.model;

import java.util.HashMap;
import java.util.Map;

public class Team {
    // Post MVP:
        // they should be able to add how many players as they would like, therefore the enum should dynamically change
    // Enums
    public enum RosterPosition {
        CATCHER_1, CATCHER_2, FIRST, THIRD, CENTER, SECOND, SHORTSTOP, MIDFIELD,
        OUTFIELD_1, OUTFIELD_2, OUTFIELD_3, OUTFIELD_4, OUTFIELD_5,
        UTILITY, PITCHER_1, PITCHER_2, PITCHER_3, PITCHER_4, PITCHER_5,
        PITCHER_6, PITCHER_7, PITCHER_8, PITCHER_9
    }

    // Fields
    private Long id;
    private League league;
    private String name;
    private double budget;
    private Map<RosterPosition, DraftPick> players = new HashMap<>();

    // Constructors
    public Team() {

    }

    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public String getName() { return name; }
    public double getBudget() { return budget; }
    public Map<RosterPosition, DraftPick> getPlayers() { return players; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setName(String name) { this.name = name; }
    public void setBudget(double budget) { this.budget = budget; }
    public void setPlayers(Map<RosterPosition, DraftPick> players) { this.players = players; }

    // Helper Methods
    public int getNumKeepers() {
        int count = 0;
        for(DraftPick player: players.values()) {
            if(player.getPlayer().isKeeper()) count++;
        }
        return count;
    }
}