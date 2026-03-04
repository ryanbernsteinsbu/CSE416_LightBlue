package com.catch23.fantasy_draft_backend.model;

// Used AI and MLB website to make sure I had correct formatting since this will be external datas

import java.time.LocalDate;
import jakarta.persistence.*; // this might have to be javax.persistence.*

@Entity
@Table(name = "player_stats")

public class PlayerStats {
    // Enums
    public enum StatType {
        LAST_YEAR, THREE_YEAR_AVG, PROJECTED
    }

    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private StatType statType;

    private String dataSource;
    private LocalDate lastUpdated;

    // Hitting Data
    private double avg;
    private int hits;
    private int homeRuns;
    private int rbi;
    private int runs;
    private int stolenBases;
    private double obp;
    private int atBats;

    // Pitching Data
    private double era;
    private double whip;
    private int wins;
    private int strikeouts;
    private int saves;
    private int holds;
    private double inningsPitched;
    private int qualityStarts;

    // Constructors
    public PlayerStats() {}

    // Getters
    public Long getId() { return id; }
    public String getDataSource() { return dataSource; }
    public double getAvg() { return avg; }
    public int getHits() { return hits; }
    public int getHomeRuns() { return homeRuns; }
    public int getRbi() { return rbi; }
    public int getRuns() { return runs; }
    public int getStolenBases() { return stolenBases; }
    public double getObp() { return obp; }
    public int getAtBats() { return atBats; }
    public double getEra() { return era; }
    public double getWhip() { return whip; }
    public int getWins() { return wins; }
    public int getStrikeouts() { return strikeouts; }
    public int getSaves() { return saves; }
    public int getHolds() { return holds; }
    public double getInningsPitched() { return inningsPitched; }
    public int getQualityStarts() { return qualityStarts; }
    public LocalDate getLastUpdated() { return lastUpdated; }
    public StatType getStatType() { return statType; }


    // Setters
    public void setId(Long id) { this.id = id; }
    public void setDataSource(String dataSource) { this.dataSource = dataSource; }
    public void setAvg(double avg) { this.avg = avg; }
    public void setHits(int hits) { this.hits = hits; }
    public void setHomeRuns(int homeRuns) { this.homeRuns = homeRuns; }
    public void setRbi(int rbi) { this.rbi = rbi; }
    public void setRuns(int runs) { this.runs = runs; }
    public void setStolenBases(int stolenBases) { this.stolenBases = stolenBases; }
    public void setObp(double obp) { this.obp = obp; }
    public void setAtBats(int atBats) { this.atBats = atBats; }
    public void setEra(double era) { this.era = era; }
    public void setWhip(double whip) { this.whip = whip; }
    public void setWins(int wins) { this.wins = wins; }
    public void setStrikeouts(int strikeouts) { this.strikeouts = strikeouts; }
    public void setSaves(int saves) { this.saves = saves; }
    public void setHolds(int holds) { this.holds = holds; }
    public void setInningsPitched(double inningsPitched) { this.inningsPitched = inningsPitched; }
    public void setQualityStarts(int qualityStarts) { this.qualityStarts = qualityStarts; }
    public void setLastUpdated(LocalDate lastUpdated) { this.lastUpdated = lastUpdated; }
    public void setStatType(StatType statType) { this.statType = statType; }
}