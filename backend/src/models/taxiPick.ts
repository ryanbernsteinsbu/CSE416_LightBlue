import { DataTypes, Model, Association } from "sequelize";
import sequelize from "../config/database";
import Team from "./team";
import Player from "./player";

class TaxiPick extends Model {
    public id!: number;
    public team_id!: number;
    public player_id!: number;
    public slot!: number;
    public season!: string;
    public cost!: number;

    public readonly team?: Team;
    public readonly player?: Player;

    public static associations: {
        team: Association<TaxiPick, Team>;
        player: Association<TaxiPick, Player>;
    }
}

TaxiPick.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    team_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: 'teams', key: 'id' }
    },
    player_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { model: 'player', key: 'id'}
    },
    slot: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 1
    }
}, {
    sequelize,
    tableName: 'taxi_pick',
    timestamps: false,
});

export default TaxiPick;