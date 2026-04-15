import { beforeAll, afterAll } from 'vitest';
import sequelize from '../src/config/database';
//eventually bundle this into models/index.ts
import ApiUser from '../src/models/apiUser';
import DraftPick from '../src/models/draftPick';
import DraftPrep from '../src/models/draftPrep';
import DraftSettings from '../src/models/draftSettings';
import League from '../src/models/league';
import Player from '../src/models/player';
import PlayerSettings from '../src/models/playerSettings';
import RosterSettings from '../src/models/rosterSettings';
import ScoringSettings from '../src/models/scoringSettings';
import Team from '../src/models/team';
import User from '../src/models/user';


beforeAll(async () => {
    console.log("setting up env")
    Team.belongsTo(League, { foreignKey: 'league_id', as: 'league' });

    Team.hasMany(DraftPick, { foreignKey: 'team_id', as: 'players' });
    DraftPick.belongsTo(Team, { foreignKey: 'team_id', as: 'team' });

    Player.hasMany(DraftPick, { foreignKey: 'player_id', as: 'draftPicks' });
    DraftPick.belongsTo(Player, { foreignKey: 'player_id', as: 'player' });

    await sequelize.sync({ force: true });
    console.log("done")
});

afterAll(async () => {
    await sequelize.close();
});
