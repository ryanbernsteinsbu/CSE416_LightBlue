import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import League from './league';

// Enums
export enum Division {
    AL = 'AL', NL = 'NL', MIXED = 'MIXED'
}

export enum OhtaniRule {
    ONE_PLAYER = 'ONE_PLAYER', TWO_PLAYERS = 'TWO_PLAYERS', MIXED = 'MIXED'
}

class PlayerSettings extends Model {
    // Fields
    public id!: number;
    public positionEligibility!: boolean;
    public multiPositionEnabled!: boolean;
    public prospectEligibility!: boolean;
    public rookieStatusFilter!: boolean;
    public mlbOnly!: boolean;
    public mlbPlusProspects!: boolean;
    public minorLeaguePlayers!: boolean;
    public freeAgents!: boolean;
    public draftInjuredPlayers!: boolean;
    public autoInjuryRisk!: boolean;
    public hideLongTermIL!: boolean;
    public ohtaniRule!: OhtaniRule;
    public division!: Division;
    public league_id!: number;
    public league!: League;

    // Associations
    public static associations: {
        league: Association<PlayerSettings, League>;
    }

    public static associate (models: any) {
        PlayerSettings.belongsTo(models.League, { foreignKey: 'league_id', as: 'league' });
    }
}

PlayerSettings.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    positionEligibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    multiPositionEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    prospectEligibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    rookieStatusFilter: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    mlbOnly: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    mlbPlusProspects: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    minorLeaguePlayers: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    freeAgents: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    draftInjuredPlayers: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    autoInjuryRisk: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    hideLongTermIL: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    ohtaniRule: {
        type: DataTypes.ENUM(...Object.values(OhtaniRule)),
        defaultValue: OhtaniRule.MIXED
    },
    division: {
        type: DataTypes.ENUM(...Object.values(Division)),
        defaultValue: Division.MIXED
    }
}, {
    sequelize,
    tableName:'player_settings'
});

export default PlayerSettings;