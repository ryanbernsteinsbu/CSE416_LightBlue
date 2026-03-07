import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';
import League from './league';
import DraftPick from './draftPick';

// Used AI to assist with sytax/ code checking
// Post MVP:
    // they should be able to add how many players as they would like, therefore the enum should dynamically change

class Team extends Model {
    // Fields
    public id!: number;
    public name!: string;
    public budget!: number;
    public league_id!: number;
    public readonly league?: League;
    public readonly players?: DraftPick[];

    public static associations: {
        players: Association<Team, DraftPick>;
        league: Association<Team, League>;
    }

    public static associate (models: any) {
        Team.belongsTo(models.League, { foreignKey: 'league_id', as: 'league' })
        Team.hasMany(models.DraftPick, { foreignKey: 'team_id', as: 'players' });
    }

    public getNumKeepers(): number {
        if(!this.players) return 0;
        return this.players.filter(pick => pick.player?.isKeeper).length;
    }
}

Team.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    tableName:'teams'
});

export default Team;