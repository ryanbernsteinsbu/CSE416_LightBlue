package com.catch23.fantasy_draft_backend.model;

public class League {
    
    // Enums
    public enum Status {
        PRE_DRAFT, IN_PROGRESS, COMPLETED
    }

    public enum Pool {
        AL, NL, MIXED
    }

    public enum Type {
        SNAKE, AUCTION, DRAFT_AND_HOLD
    }

    public enum OhtaniRule {
        ONE_PLAYER, TWO_PLAYERS, MIXED
    }

    // Fields
    private Long id;
    private User user;
    private String title;
    private Status status;
    private Pool pool;
    private Type type; // Do we need this for the assignment??
    private double budget;
    private OhtaniRule ohtani;
    private int numTeams;
    private List<Team> teams = new ArrayList<>();
    private ScoringSettings scoringSettings;

    // Constructors
    public League() {
        
    }

    // Getters
    public Long getId() { return id; }
    public User getUser() { return user; }
    public String getTitle() { return title; }
    public Status getStatus() { return status; }
    public Pool getPool() { return pool; }
    public Type getType() { return type; }
    public double getBudget() { return budget; }
    public OhtaniRule getOhtani() { return ohtani; }
    public int getNumTeams() { return numTeams; }
    public List<Team> getTeams(){ return teams; }
    public ScoringSettings getScoringSettings(){ return scoringSettings; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setUser(User user){ this.user = user; }
    public void setTitle(String title) { this.title = title; }
    public void setStatus(Status status) { this.status = status; }
    public void setPool(Pool pool) { this.pool = pool; }
    public void setType(Type type) { this.type = type; }
    public void setBudget(double budget) { this.budget = budget; }
    public void setOhtani(OhtaniRule ohtani) { this.ohtani = ohtani; }
    public void setNumTeams(int numTeams) { this.numTeams = numTeams; }
    public void setTeams(List<Team> teams) { this.teams = teams; }
    public void setScoringSettings(ScoringSettings scoringSettings) { this.scoringSettings = scoringSettings; }

    // Teams Helper Functions
    public void addTeam(Team team) {
        this.teams.add(team);
    }

    public void removeTeam(Team team) {
        this.teams.remove(team);
    }

    public void distributeBudget() {
        for(Team team: teams) {
            team.setBudget(this.budget);
        }
    }
}