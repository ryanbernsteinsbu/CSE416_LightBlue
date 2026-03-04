package com.catch23.fantasy_draft_backend.model;

// Used AI and MLB website to make sure I had correct formatting since this will be external datas

public class Player {
    // Enums
    public enum Position {
        CATCHER, FIRST_BASE, THIRD_BASE, CORNER_INFIELD, SECOND_BASE, SHORT_STOP, MIDDLE_INFIELD,
        OUTFIELD, UTILITY, PITCHER
    } // QUESTION: Are we worried about like starting pitcher, relief pitcher, designated hitter, etc.

    public enum PlayerStatus {
        ACTIVE, IL_10, IL_15, IL_60, MINORS, OUT
    } // QUESTION: Do we even care about 10 or 15 day injury list? I didn't include 7 because that didn't feel necessary

    // Fields
    private Long id;
    private String name;
    private String mlbPlayerId; // use for syncing with MLB database
    private String realTeam;
    private List<Position> position; // QUESTION: Should this be a list?
    private PlayerStatus status;
    private PlayerStats playerStats;

    // Constructors
    public Player() {}

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getRealTeam() { return realTeam; }
    public List<String> getPosition() { return position; }
    public PlayerStatus getStatus() { return status; }
    public PlayerStats getStats() { return playerStats; }
    
    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setRealTeam(String realTeam) { this.realTeam = realTeam; }
    public void setPosition(List<String> position) { this.position = position; }
    public void status(PlayerStatus status) { this.status = status; }
    public void status(PlayerStats playerStats) {this.playerStats = playerStats; }

}