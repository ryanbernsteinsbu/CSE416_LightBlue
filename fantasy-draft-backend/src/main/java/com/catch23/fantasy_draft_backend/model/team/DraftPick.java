package com.catch23.fantasy_draft_backend.model;

import jakarta.persistence.*; // this might have to be javax.persistence.*

@Entity
@Table(name = "draft_pick")
public class DraftPick {
    // Enums
    public enum RosterPosition {
        CATCHER_1, CATCHER_2, FIRST, THIRD, CENTER, SECOND, SHORTSTOP, MIDFIELD,
        OUTFIELD_1, OUTFIELD_2, OUTFIELD_3, OUTFIELD_4, OUTFIELD_5,
        UTILITY, PITCHER_1, PITCHER_2, PITCHER_3, PITCHER_4, PITCHER_5,
        PITCHER_6, PITCHER_7, PITCHER_8, PITCHER_9
    }

    // Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player;

    @Column(nullable = false)
    private double cost;

    @Enumerated(EnumType.STRING)
    @Column(name = "roster_position")
    private RosterPosition rosterPosition;

    // Constructors
    public DraftPick() {

    }

    // Getters
    public Long getId() { return id; }
    public Player getPlayer() { return player; }
    public double getCost() { return cost; }
    public RosterPosition getRosterPosition() { return rosterPosition; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setPlayer(Player player) { this.player = player; }
    public void setCost(double cost) { this.cost = cost; }
    public void setRosterPosition(RosterPosition rosterPosition) { this.rosterPosition = rosterPosition; }
}