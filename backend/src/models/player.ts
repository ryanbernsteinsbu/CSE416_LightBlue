import { DataTypes, Model, Association} from 'sequelize';
import sequelize from '../config/database';

// Used AI and MLB website to make sure I had correct formatting since this will be external datas

// Enums
export enum Position {
    CATCHER = 'CATCHER', FIRST = 'FIRST', SECOND = 'SECOND', THIRD = 'THIRD',
    SHORTSTOP = 'SHORTSTOP', OUTFIELD = 'OUTFIELD', PITCHER = 'PITCHER'
}

export enum Status {
    ACTIVE = 'ACTIVE', IL_10 = 'IL_10', IL_15 = 'IL_15', IL_60='IL_60', MINORS = 'MINORS', OUT='OUT'
}


class Player extends Model {
    // Fields
    public id!: number;
    public name!: string;
    public mlbPlayerId!: string; // use for syncing with MLB database
    public realTeam!: string;
    public isKeeper!: boolean;
    public seasonsLeft!: number; // only relevant if isKeeper is true
    public status!: Status;
    public playablePositions!: Position[];
    public lastYearStats!: Record<string, number>;
    public threeYearAvg!: Record<string, number>;
    public projectedStats!: Record<string, number>;
}

Player.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mlbPlayerId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    realTeam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isKeeper: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    seasonsLeft: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM(...Object.values(Status)),
        allowNull: false
    },
    playablePositions: {
        type: DataTypes.ARRAY(DataTypes.ENUM(...Object.values(Position))),
        allowNull: false,
        defaultValue: []
    },
    lastYearStats: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
    },
    threeYearAvg: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
    },
    projectedStats: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
    }
}, {
    sequelize,
    tableName:'player'
});

export default Player;