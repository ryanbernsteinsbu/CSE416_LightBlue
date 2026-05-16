import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/database';
import Team from './team';
import Player from './player';

export enum RosterPosition {
     CATCHER = 'CATCHER', FIRST = 'FIRST', THIRD = 'THIRD', SECOND = 'SECOND', SHORTSTOP = 'SHORTSTOP',
     CORNER = 'CORNER', MIDDLE = 'MIDDLE',
     OUTFIELD = 'OUTFIELD', UTILITY = 'UTILITY', PITCHER = 'PITCHER'
}

class DraftPick extends Model {
    public id!: number;
    public cost!: number;
    public rosterPosition!: RosterPosition;
    public team_id!: number;
    public team?: Team;
    public player_id!: number;
    public player?: Player;
    public season?: string;
    public draft_time?: string; // ← new
    public createdAt!: Date;
    public updatedAt!: Date;
    public slotIndex!: number;

    public static associations: {
        team: Association<DraftPick, Team>;
        player: Association<DraftPick, Player>;
    }
}

DraftPick.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    rosterPosition: {
        type: DataTypes.ENUM(...Object.values(RosterPosition)),
        allowNull: false,
        field: 'roster_position'
    },
    team_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: 'teams', key: 'id' }
    },
    player_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: 'player', key: 'id' }
    },
    season: {
        type: DataTypes.STRING,
        allowNull: true
    },
    draft_time: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    slotIndex: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize,
    tableName: 'draft_pick',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default DraftPick;