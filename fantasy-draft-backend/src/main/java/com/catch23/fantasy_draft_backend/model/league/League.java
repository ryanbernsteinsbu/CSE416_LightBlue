package com.catch23.fantasy_draft_backend.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class League {
    // Enums
    public enum Status {
        PRE_DRAFT, IN_PROGRESS, COMPLETED
    }

    // Fields
    private Long id;
    private User user;
    private String title;
    private String leagueIconUrl;
    private Status status;
    private int currRank;
    private int projectFinish;
    private LocalDate dateMade;
    private int season;
    private List<Team> teams = new ArrayList<>();
    private DraftPrep draftPrep;
    private ScoringSettings scoringSettings;
    private PlayerSettings playerSettings;
    private RosterSettings rosterSettings;
    private DraftSettings draftSettings;

    // Constructors
    public League() {
        season = 1;
        dateMade = LocalDate.now();
        draftPrep = new DraftPrep();
    }

    // Getters
    public Long getId() { return id; }
    public User getUser() { return user; }
    public String getTitle() { return title; }
    public String getIconUrl() { return leagueIconUrl; }
    public Status getStatus() { return status; }
    public int getCurrRank() { return currRank; }
    public int getProjectFinish() { return projectFinish; }
    public LocalDate getDate() { return dateMade; }
    public int getSeason() { return season; }
    public List<Team> getTeams(){ return teams; }
    public int getNumTeams() { return teams.size(); }
    public ScoringSettings getScoringSettings(){ return scoringSettings; }
    public DraftPrep getDraftPrep() { return draftPrep; }
    public PlayerSettings getPlayerSettings() { return playerSettings; }
    public RosterSettings getRosterSettings() { return rosterSettings; }
    public DraftSettings getDraftSettings() { return draftSettings; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setUser(User user){ this.user = user; }
    public void setTitle(String title) { this.title = title; }
    public void setIconUrl(String leagueIconUrl) { this.leagueIconUrl = leagueIconUrl; }
    public void setStatus(Status status) { this.status = status; }
    public void setCurrentRank(int currRank) { this.currRank = currRank; }
    public void setProjectFinish(int projectFinish) { this.projectFinish = projectFinish; }
    public void setDate(LocalDate dateMade) { this.dateMade = dateMade; }
    public void setSeason(int season) { this.season = season; }
    public void setTeams(List<Team> teams) { this.teams = teams; }
    public void setScoringSettings(ScoringSettings scoringSettings) { this.scoringSettings = scoringSettings; }
    public void setDraftPrep(DraftPrep draftPrep) { this.draftPrep = draftPrep; }
    public void setPlayerSettings(PlayerSettings playerSettings) { this.playerSettings = playerSettings; }
    public void setRosterSettings(RosterSettings rosterSettings) { this.rosterSettings = rosterSettings; }
    public void setDraftSettings(DraftSettings draftSettings) { this.draftSettings = draftSettings; }

    // Helper Functions
    public void distributeBudget() {
        if(draftSettings == null) return;
        for(Team team: teams) {
            team.setBudget(this.draftSettings.getBudget());
        }
    }
}