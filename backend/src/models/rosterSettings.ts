import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import League from './league';

class RosterSettings extends Model {
    // Fields
    public id!: number;
    public numCatchers!: number;
    public numFirstBase!: number;
    public numSecondBase!: number;
    public numThirdBase!: number;
    public numShortstop!: number;
    public numCornerInfield!: number;
    public numMiddleInfield!: number;
    public numOutfield!: number;
    public numUtility!: number;
    public numPitchers!: number;
    public numTaxi!: number;
    public league_id!: number;
    public league!: League;

    // Associations
    public static associations: {
        league: Association<RosterSettings, League>;
    }

    public static associate (models: any) {
        RosterSettings.belongsTo(models.League, { foreignKey: 'league_id', as: 'league' });
    }

    // Helper Methods
    public getTotalRosterSize(): number {
        return this.numCatchers + this.numFirstBase + this.numSecondBase + this.numThirdBase +
        this.numShortstop + this.numCornerInfield + this.numMiddleInfield +
        this.numOutfield + this.numUtility + this.numPitchers + this.numTaxi;
    }
}

RosterSettings.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    numCatchers: {
        type: DataTypes.INTEGER,
        defaultValue: 2
    },
    numFirstBase: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numSecondBase: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numThirdBase: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }, 
    numShortstop: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numCornerInfield: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numMiddleInfield: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numOutfield: {
        type: DataTypes.INTEGER,
        defaultValue: 5
    },
    numUtility: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    numPitchers: {
        type: DataTypes.INTEGER,
        defaultValue: 9
    },
    numTaxi: {
        type: DataTypes.INTEGER,
        defaultValue: 8
    }
}, {
    sequelize,
    tableName:'roster_settings'
});

export default RosterSettings;