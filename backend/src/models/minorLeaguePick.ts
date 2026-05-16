import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/database';
import Player from './player';

class MinorLeaguePick extends Model {
    public id!: number;
    public player_id!: number;
    public player?: Player;
    public season?: string;
    public slotIndex!: number;
    public table_id!: number;

    public static associations: {
        player: Association<MinorLeaguePick, Player>;
    }
}

MinorLeaguePick.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
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
    slotIndex: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    table_id: {
        type: DataTypes.BIGINT,
        references: { model: 'minor_league', key: 'id' }
    }
}, {
    sequelize,
    tableName: 'minor_league_pick',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default MinorLeaguePick;