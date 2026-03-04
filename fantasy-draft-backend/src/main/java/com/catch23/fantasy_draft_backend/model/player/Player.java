package com.catch23.fantasy_draft_backend.model;

// Used AI and MLB website to make sure I had correct formatting since this will be external datas

import java.util.ArrayList;
import java.util.List;

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
    private List<Position> playablePosition = new ArrayList<>();
    private PlayerStatus status;
    private PlayerStats lastYearStats;
    private PlayerStats threeYearAvg;
    private PlayerStats projectedStats;
    private boolean isKeeper;
    private int seasonsLeft; // only relevant if isKeeper is true


    // Constructors
    public Player() {
        this.isKeeper = false;
        seasonsLeft = 0;
    }

    // Getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getMlbPlayerId() { return mlbPlayerId; }
    public String getRealTeam() { return realTeam; }
    public List<Position> getPlayablePosition() { return playablePosition; }
    public PlayerStatus getStatus() { return status; }
    public PlayerStats getLastYearStats() { return lastYearStats; }
    public PlayerStats getThreeYearAvg() { return threeYearAvg; }
    public PlayerStats getProjectedStats() { return projectedStats; }
    public boolean isKeeper() { return isKeeper; }
    public int getSeasonsLeft() { return seasonsLeft; }
    
    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setMlbPlayerId(String mlbPlayerId) { this.mlbPlayerId = mlbPlayerId; }
    public void setRealTeam(String realTeam) { this.realTeam = realTeam; }
    public void setPlayablePosition(List<Position> playablePosition) { this.playablePosition = playablePosition; }
    public void setLastYearStats(PlayerStats lastYearStats) { this.lastYearStats = lastYearStats; }
    public void setThreeYearAvg(PlayerStats threeYearAvg) { this.threeYearAvg = threeYearAvg; }
    public void setProjectedStats(PlayerStats projectedStats) { this.projectedStats = projectedStats; }
    public void setStatus(PlayerStatus status) {this.status = status; }
    public void setKeeper(boolean isKeeper) { this.isKeeper = isKeeper; }
    public void setSeasonsLeft(int seasonsLeft) { this.seasonsLeft = seasonsLeft; }

}