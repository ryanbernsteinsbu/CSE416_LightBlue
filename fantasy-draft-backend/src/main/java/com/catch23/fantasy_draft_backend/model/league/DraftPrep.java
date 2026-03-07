package com.catch23.fantasy_draft_backend.model;

import jakarta.persistence.*; // this might have to be javax.persistence.*

@Entity
@Table(name = "draft_prep")

public class DraftPrep {
    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "league_id")
    private League league;

    private boolean rankingsImported;
    private boolean cheatsheetBuilt;
    private boolean sleepersTagged;
    private boolean customRankings;
    private boolean projectionsImported;

    // Constructors
    public DraftPrep() {

    }

    // Getters
    public Long getId() { return id; }
    public boolean isRankingsImported() { return rankingsImported; }
    public boolean isCheatsheetBuilt() { return cheatsheetBuilt; }
    public boolean isSleepersTagged() { return sleepersTagged; }
    public boolean isCustomRankings() { return customRankings; }
    public boolean isProjectionsImported() { return projectionsImported; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setRankingsImported(boolean rankingsImported) { this.rankingsImported = rankingsImported; }
    public void setCheatsheetBuilt(boolean cheatsheetBuilt) { this.cheatsheetBuilt = cheatsheetBuilt; }
    public void setSleepersTagged(boolean sleepersTagged) { this.sleepersTagged = sleepersTagged; }
    public void setCustomRankings(boolean customRankings) { this.customRankings = customRankings; }
    public void setProjectionsImported(boolean projectionsImported) { this.projectionsImported = projectionsImported; }

    // Completed percentage helper function
    @Transient
    public int getCompletedPercentage() {
        int count = (rankingsImported? 1 : 0)
                    + (cheatsheetBuilt? 1 : 0)
                    + (sleepersTagged? 1 : 0)
                    + (customRankings? 1 : 0)
                    + (projectionsImported? 1 : 0);
        
        return (count * 100) / 5;
    }
}