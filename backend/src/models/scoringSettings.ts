import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import League from './league';

//     /* POST MVP TASKS:
//         * add in more data beyond the standard stats
//     */

class ScoringSettings extends Model {
    // Fields
    public id!: number;
        // Hitters
        public useAvg!: boolean;
        public useHr!: boolean;
        public useRbi!: boolean;
        public useSb!: boolean;
        public useRuns!: boolean;

        // Pitchers
        public useEra!: boolean;
        public useWhip!: boolean;
        public useWins!: boolean;
        public useStrikeouts!: boolean;
        public useSaves!: boolean;

    public league_id!: number;
    public league!: League;

    // Associations
    public static associations: {
        league: Association<ScoringSettings, League>;
    }

    public static associate (models: any) {
        ScoringSettings.belongsTo(models.League, { foreignKey: 'league_id', as: 'league' });
    }
}

ScoringSettings.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    useAvg: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useHr: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useRbi: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useSb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useRuns: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useEra: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useWhip: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useWins: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useStrikeouts: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    useSaves: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    sequelize,
    tableName:'scoring_settings'
});

export default ScoringSettings;