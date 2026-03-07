package com.catch23.fantasy_draft_backend.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*; // this might have to be javax.persistence.*

@Entity
@Table(name = "league")

public class League {
    // Enums
    public enum Status {
        PRE_DRAFT, IN_PROGRESS, COMPLETED
    }

    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @OneToMany(mappedBy = "league", cascade = CascadeType.ALL)
    private List<Team> teams = new ArrayList<>();

    @OneToOne(mappedBy = "league", cascade = CascadeType.ALL)
    private DraftPrep draftPrep;

    @OneToOne(mappedBy = "league", cascade = CascadeType.ALL)
    private ScoringSettings scoringSettings;

    @OneToOne(mappedBy = "league", cascade = CascadeType.ALL)
    private PlayerSettings playerSettings;

    @OneToOne(mappedBy = "league", cascade = CascadeType.ALL)
    private RosterSettings rosterSettings;

    @OneToOne(mappedBy = "league", cascade = CascadeType.ALL)
    private DraftSettings draftSettings;

    private String title;
    private String leagueIconUrl;
    private int currRank;
    private int projectFinish;
    private LocalDate dateMade;
    private int season;

    // Constructors
    public League() {
        season = 1;
        dateMade = LocalDate.now();
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