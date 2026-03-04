package com.catch23.fantasy_draft_backend.model;

public class PlayerSettings {
    // Enums
    public enum Division {
        AL, NL, MIXED
    }

    public enum OhtaniRule {
        ONE_PLAYER, TWO_PLAYERS, MIXED
    }

    // Fields
    private Long id;
    private League league;

        // Eligibility
        private boolean positionEligibility;
        private boolean multiPositionEnabled;
        private boolean prospectEligibility;
        private boolean rookieStatusFilter;

        // Pool
        private boolean mlbOnly;
        private boolean mlbPlusProspects;
        private boolean minorLeaguePlayers;
        private boolean freeAgents;
        private OhtaniRule ohtani;
        private Division division;

        // Injury Handling
        private boolean draftInjuredPlayers;
        private boolean autoInjuryRisk;
        private boolean hideLongTermIL;

    // Constructors
    public LeagueSettings() { // Default conditions
        this.positionEligibility = true;
        this.multiPositionEnabled = false;
        this.prospectEligibility = true;
        this.rookieStatusFilter = true;
        this.mlbOnly = true;
        this.mlbPlusProspects = false;
        this.minorLeaguePlayers = false;
        this.freeAgents = false;
        this.ohtani = OhtaniRule.MIXED;
        this.division = Division.MIXED;
        this.draftInjuredPlayers = false;
        this.autoInjuryRisk = true;
        this.hideLongTermIL = true;
    }

    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public boolean isPositionEligibility() { return positionEligibility; }
    public boolean isMultiPositionEnabled() { return multiPositionEnabled; }
    public boolean isProspectEligibility() { return prospectEligibility; }
    public boolean isRookieStatusFilter() { return rookieStatusFilter; }
    public boolean isMlbOnly() { return mlbOnly; }
    public boolean isMlbPlusProspects() { return mlbPlusProspects; }
    public boolean isMinorLeaguePlayers() { return minorLeaguePlayers; }
    public boolean isFreeAgents() { return freeAgents; }
    public OhtaniRule getOhtaniRule() { return ohtani; }
    public Division getDivision() { return division; }
    public boolean isDraftInjuredPlayers() { return draftInjuredPlayers; }
    public boolean isAutoInjuryRisk() { return autoInjuryRisk; }
    public boolean isHideLongTermIL() { return hideLongTermIL; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setPositionEligibility(boolean positionEligibility) { this.positionEligibility = positionEligibility; }
    public void setMultiPositionEnabled(boolean multiPositionEnabled) { this.multiPositionEnabled = multiPositionEnabled; }
    public void setProspectEligibility(boolean prospectEligibility) { this.prospectEligibility = prospectEligibility; }
    public void setRookieStatusFilter(boolean rookieStatusFilter) { this.rookieStatusFilter = rookieStatusFilter; }
    public void setMlbOnly(boolean mlbOnly) { this.mlbOnly = mlbOnly; }
    public void setMlbPlusProspects(boolean mlbPlusProspects) { this.mlbPlusProspects = mlbPlusProspects; }
    public void setMinorLeaguePlayers(boolean minorLeaguePlayers) { this.minorLeaguePlayers = minorLeaguePlayers; }
    public void setFreeAgents(boolean freeAgents) { this.freeAgents = freeAgents; }
    public void setOhtaniRule(OhtaniRule ohtani) { this.ohtani = ohtani; }
    public void setDivision(Division division) { this.division = division; }
    public void setDraftInjuredPlayers(boolean draftInjuredPlayers) { this.draftInjuredPlayers = draftInjuredPlayers; }
    public void setAutoInjuryRisk(boolean autoInjuryRisk) { this.autoInjuryRisk = autoInjuryRisk; }
    public void setHideLongTermIL(boolean hideLongTermIL) { this.hideLongTermIL = hideLongTermIL; }

}