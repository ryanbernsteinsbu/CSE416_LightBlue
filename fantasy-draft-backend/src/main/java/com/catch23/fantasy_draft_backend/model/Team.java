package com.catch23.fantasy_draft_backend.model;

// WORKING ON THIS ONE STILL
public class Team {
    // Enums
    public enum RosterPosition {
        CATCHER_1, CATCHER_2, FIRST, THIRD, CENTER, SECOND, SHORTSTOP, MIDFIELD,
        OUTFIELD_1, OUTFIELD_2, OUTFIELD_3, OUTFIELD_4, OUTFIELD_5,
        UTILITY, PITCHER_1, PITCHER_2, PITCHER_3, PITCHER_4, PITCHER_5,
        PITCHER_6, PITCHER_7, PITCHER_8, PITCHER_9
    }

    // Fields
    private Long id;
    private double budget;
    private Long leagueId;
    private Map<RosterPosition, DraftPick> players;

    // Constructors
    public Team() {

    }

    // Getters
    public Long getId() { return id; }
    public double getBudget() { return budget; }
    public Long getLeagueId() { return leagueId; }
    public List<Player> getPlayers() { return players; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setBudget(double budget) { this.budget = budget; }
    public void setLeagueId(Long leagueId) { this.leagueId = leagueId; }
    public void setPlayers(List<Player> players) { this.players = players; }

    // Players Helper Methods
    public void addPlayer(Player player, String position){
        players.add(player);
    }

    public void removePlayer(Player player){
        players.remove(player);
    }
}