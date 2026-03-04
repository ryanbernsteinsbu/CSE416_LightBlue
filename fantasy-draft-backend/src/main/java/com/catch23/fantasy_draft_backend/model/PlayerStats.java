package com.catch23.fantasy_draft_backend.model;

// Used AI and MLB website to make sure I had correct formatting since this will be external datas

public class PlayerStats {
    // Fields
    private Long id;
    private Player player;
    private String dataSource;
    private Date lastUpdated;

    // Hitting Data
    private double avg;
    private int hits;
    private int homeRuns;
    private int rbi;
    private int runs;
    private int stolenBases;
    private double ops;
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
    public PlayerProjection() {}

    // Getters
    public Long getId() { return id; }
    public Player getPlayer() { return player; }
    public String getSource() { return source; }
    public int getProjectedYear() { return projectedYear; }
    public double getAvg() { return avg; }
    public int getHits() { return hits; }
    public int getHomeRuns() { return homeRuns; }
    public int getRbi() { return rbi; }
    public int getRuns() { return runs; }
    public int getStolenBases() { return stolenBases; }
    public double getOps() { return ops; }
    public int getAtBats() { return atBats; }
    public double getEra() { return era; }
    public double getWhip() { return whip; }
    public int getWins() { return wins; }
    public int getStrikeouts() { return strikeouts; }
    public int getSaves() { return saves; }
    public int getHolds() { return holds; }
    public double getInningsPitched() { return inningsPitched; }
    public int getQualityStarts() { return qualityStarts; }


    // Setters
    public void setId(Long id) { this.id = id; }
    public void setPlayer(Player player) { this.player = player; }
    public void setSource(String source) { this.source = source; }
    public void setProjectedYear(int projectedYear) { this.projectedYear = projectedYear; }
    public void setAvg(double avg) { this.avg = avg; }
    public void setHits(int hits) { this.hits = hits; }
    public void setHomeRuns(int homeRuns) { this.homeRuns = homeRuns; }
    public void setRbi(int rbi) { this.rbi = rbi; }
    public void setRuns(int runs) { this.runs = runs; }
    public void setStolenBases(int stolenBases) { this.stolenBases = stolenBases; }
    public void setOps(double ops) { this.ops = ops; }
    public void setAtBats(int atBats) { this.atBats = atBats; }
    public void setEra(double era) { this.era = era; }
    public void setWhip(double whip) { this.whip = whip; }
    public void setWins(int wins) { this.wins = wins; }
    public void setStrikeouts(int strikeouts) { this.strikeouts = strikeouts; }
    public void setSaves(int saves) { this.saves = saves; }
    public void setHolds(int holds) { this.holds = holds; }
    public void setInningsPitched(double inningsPitched) { this.inningsPitched = inningsPitched; }
    public void setQualityStarts(int qualityStarts) { this.qualityStarts = qualityStarts; }
}