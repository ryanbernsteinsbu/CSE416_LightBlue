package com.catch23.fantasy_draft_backend.model;

import jakarta.persistence.*; // this might have to be javax.persistence.*

@Entity
@Table(name = "roster_settings")

public class RosterSettings {
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "league_id")
    private League league;

    private int numCatchers;
    private int numFirstBase;
    private int numSecondBase;
    private int numThirdBase;
    private int numShortstop;
    private int numCornerInfield;
    private int numMiddleInfield;
    private int numOutfield;
    private int numUtility;
    private int numPitchers;
    private int numTaxi;

    // Constructors
    public RosterSettings() {
        this.numCatchers = 2;
        this.numFirstBase = 1;
        this.numSecondBase = 1;
        this.numThirdBase = 1;
        this.numShortstop = 1;
        this.numCornerInfield = 1;
        this.numMiddleInfield = 1;
        this.numOutfield = 5;
        this.numUtility = 1;
        this.numPitchers = 9;
        this.numTaxi = 8;
    }

    // Getters
    public Long getId() { return id; }
    public League getLeague() { return league; }
    public int getNumCatchers() { return numCatchers; }
    public int getNumFirstBase() { return numFirstBase; }
    public int getNumSecondBase() { return numSecondBase; }
    public int getNumThirdBase() { return numThirdBase; }
    public int getNumShortstop() { return numShortstop; }
    public int getNumCornerInfield() { return numCornerInfield; }
    public int getNumMiddleInfield() { return numMiddleInfield; }
    public int getNumOutfield() { return numOutfield; }
    public int getNumUtility() { return numUtility; }
    public int getNumPitchers() { return numPitchers; }
    public int getNumTaxi() { return numTaxi; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setLeague(League league) { this.league = league; }
    public void setNumCatchers(int numCatchers) { this.numCatchers = numCatchers; }
    public void setNumFirstBase(int numFirstBase) { this.numFirstBase = numFirstBase; }
    public void setNumSecondBase(int numSecondBase) { this.numSecondBase = numSecondBase; }
    public void setNumThirdBase(int numThirdBase) { this.numThirdBase = numThirdBase; }
    public void setNumShortstop(int numShortstop) { this.numShortstop = numShortstop; }
    public void setNumCornerInfield(int numCornerInfield) { this.numCornerInfield = numCornerInfield; }
    public void setNumMiddleInfield(int numMiddleInfield) { this.numMiddleInfield = numMiddleInfield; }
    public void setNumOutfield(int numOutfield) { this.numOutfield = numOutfield; }
    public void setNumUtility(int numUtility) { this.numUtility = numUtility; }
    public void setNumPitchers(int numPitchers) { this.numPitchers = numPitchers; }
    public void setNumTaxi(int numTaxi) { this.numTaxi = numTaxi; }

    // Helper Methods
    @Transient
    public int getTotalRosterSize() {
        return numCatchers + numFirstBase + numSecondBase + numThirdBase +
            numShortstop + numCornerInfield + numMiddleInfield +
            numOutfield + numUtility + numPitchers + numTaxi;
    }
}