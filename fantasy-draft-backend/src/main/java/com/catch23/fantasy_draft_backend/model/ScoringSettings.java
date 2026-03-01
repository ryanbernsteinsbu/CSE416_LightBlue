package com.catch23.fantasy_draft_backend.model;

// Getters, and setters done using AI

public class ScoringSettings {
    private Long id;
    private League league;

    /* POST MVP TASKS:
        * add in more data beyond the standard stats
    */

    // Hitters (Based on MLB standard stats)
    private boolean useAvg; // Batting average
    private boolean useHr; // Home runs
    private boolean useRbi; // Runs batted in
    private boolean useSb; // Stolen bases
    private boolean useRuns; // Runs scored

    // Pitchers (Based on MLB standard stats)
    private boolean useEra; // Earned Run Average
    private boolean useWhip; // Walks and Hits Per Inning Pitched
    private boolean useWins; // Wins
    private boolean useStrikeouts; // Strikeouts
    private boolean useSaves; // Saves

    public ScoringSettings() {}

    public ScoringSettings(League league) { // Setting common stats (Based on MLB website) to true;
        this.league = league;
        this.useAvg = true;
        this.useHr = true;
        this.useRbi = true;
        this.useSb = true;
        this.useRuns = true;
        this.useEra = true;
        this.useWhip = true;
        this.useWins = true;
        this.useStrikeouts = true;
        this.useSaves = true;
    }


    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public boolean isUseAvg() { return useAvg; }
    public boolean isUseHr() { return useHr; }
    public boolean isUseRbi() { return useRbi; }
    public boolean isUseSb() { return useSb; }
    public boolean isUseRuns() { return useRuns; }
    public boolean isUseEra() { return useEra; }
    public boolean isUseWhip() { return useWhip; }
    public boolean isUseWins() { return useWins; }
    public boolean isUseStrikeouts() { return useStrikeouts; }
    public boolean isUseSaves() { return useSaves; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setUseAvg(boolean useAvg) { this.useAvg = useAvg; }
    public void setUseHr(boolean useHr) { this.useHr = useHr; }
    public void setUseRbi(boolean useRbi) { this.useRbi = useRbi; }
    public void setUseSb(boolean useSb) { this.useSb = useSb; }
    public void setUseRuns(boolean useRuns) { this.useRuns = useRuns; }
    public void setUseEra(boolean useEra) { this.useEra = useEra; }
    public void setUseWhip(boolean useWhip) { this.useWhip = useWhip; }
    public void setUseWins(boolean useWins) { this.useWins = useWins; }
    public void setUseStrikeouts(boolean useStrikeouts) { this.useStrikeouts = useStrikeouts; }
    public void setUseSaves(boolean useSaves) { this.useSaves = useSaves; }
}