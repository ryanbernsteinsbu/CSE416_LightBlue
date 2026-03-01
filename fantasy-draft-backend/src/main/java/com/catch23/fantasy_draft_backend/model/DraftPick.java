package com.catch23.fantasy_draft_backend.model;

public class DraftPick {
    // Fields
    public Long id;
    public Player player;
    public double cost;

    // Constructors
    public DraftPick() {

    }

    // Getters
    public Long getId() { return id; }
    public Player getPlayer() { return player; }
    public double getCost() { return cost; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setPlayer(Player player) { this.player = player; }
    public void setCost(double cost) { this.cost = cost; }
}