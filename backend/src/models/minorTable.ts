import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import MinorLeaguePick from './minorLeaguePick'

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

export default MinorTable;