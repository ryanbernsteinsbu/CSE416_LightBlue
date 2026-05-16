import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import MinorLeaguePick from './minorLeaguePick'
import Player from './player'

class MinorTable extends Model {
    // Fields
    public id!: number;
    public numPlayers!: number;
    public readonly players?: MinorLeaguePick[];
    public team_id!: number;
}

MinorTable.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    numPlayers: {
        type: DataTypes.INTEGER,
    },
    team_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: { model: 'teams', key: 'id' }
    }
}, {
    sequelize,
    tableName:'minor_league',
    timestamps: false
});

MinorTable.hasMany(MinorLeaguePick, { foreignKey: 'table_id', as: 'players' });
MinorLeaguePick.belongsTo(MinorTable, { foreignKey: 'table_id' });
MinorLeaguePick.belongsTo(Player, { foreignKey: 'player_id', as: 'player' });

export default MinorTable;