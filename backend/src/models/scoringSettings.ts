import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
//import League from './league';

//     /* POST MVP TASKS:
//         * add in more data beyond the standard stats
//     */

class ScoringSettings extends Model {
    // Fields
    public id!: number;
        
    // Hitters
    public hrWeight!: number;      // 0 = don't use, otherwise relative importance
    public rbiWeight!: number;
    public sbWeight!: number;
    public avgWeight!: number;
    public runsWeight!: number;

    // Pitchers
    public eraWeight!: number;
    public whipWeight!: number;
    public winsWeight!: number;
    public strikeoutsWeight!: number;
    public savesWeight!: number;

    // Stat windows
    public useLastYear!: boolean;
    public useThreeYearAvg!: boolean;
    public useProjected!: boolean;

    public league_id!: number;
}

ScoringSettings.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    hrWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.175,
        field: 'hr_weight'
    },
    rbiWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.155,
        field: 'rbi_weight'
    },
    sbWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.125,
        field: 'sb_weight'
    },
    avgWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.150,
        field: 'avg_weight'
    },
    runsWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.125,
        field: 'runs_weight'
    },
    eraWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.200,
        field: 'era_weight'
    },
    whipWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.200,
        field: 'whip_weight'
    },
    winsWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.100,
        field: 'wins_weight'
    },
    strikeoutsWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.150,
        field: 'strikeouts_weight'
    },
    savesWeight: {
        type: DataTypes.FLOAT,
        defaultValue: 0.100,
        field: 'saves_weight'
    },
    useLastYear: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'use_last_year'
    },
    useThreeYearAvg: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'use_three_year_avg'
    },
    useProjected: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'use_projected'
    },
    league_id: { // fix this to camelCase later
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    sequelize,
    tableName:'scoring_settings',
    timestamps: false
});

//ScoringSettings.belongsTo(League, { foreignKey: 'league_id', as: 'league' });

export default ScoringSettings;

// import { DataTypes, Model, Association} from 'sequelize';
// import sequelize from '../config/database';
// //import League from './league';

// //     /* POST MVP TASKS:
// //         * add in more data beyond the standard stats
// //     */

// class ScoringSettings extends Model {
//     // Fields
//     public id!: number;
//         // Hitters
//         public useAvg!: boolean;
//         public useHr!: boolean;
//         public useRbi!: boolean;
//         public useSb!: boolean;
//         public useRuns!: boolean;

//         // Pitchers
//         public useEra!: boolean;
//         public useWhip!: boolean;
//         public useWins!: boolean;
//         public useStrikeouts!: boolean;
//         public useSaves!: boolean;

//     public league_id!: number;
//     //public league!: League;

//     // Associations
//     // public static associations: {
//     //     league: Association<ScoringSettings, League>;
//     // }

//     // public static associate (models: any) {
//     //     ScoringSettings.belongsTo(models.League, { foreignKey: 'league_id', as: 'league' });
//     // }
// }

// ScoringSettings.init({
//     id: {
//         type: DataTypes.BIGINT,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     useAvg: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_avg'
//     },
//     useHr: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_hr'
//     },
//     useRbi: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_rbi'
//     },
//     useSb: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_sb'
//     },
//     useRuns: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_runs'
//     },
//     useEra: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_era'
//     },
//     useWhip: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_whip'
//     },
//     useWins: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_wins'
//     },
//     useStrikeouts: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_strikeouts'
//     },
//     useSaves: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//         field: 'use_saves'
//     },
//     league_id: { // fix this to camelCase later
//         type: DataTypes.BIGINT,
//         allowNull: false
//     }
// }, {
//     sequelize,
//     tableName:'scoring_settings',
//     timestamps: false
// });

// //ScoringSettings.belongsTo(League, { foreignKey: 'league_id', as: 'league' });

// export default ScoringSettings;