import { beforeAll, afterAll, beforeEach } from 'vitest';
import {
    sequelize,
    ApiUser,
    User,
    DraftPick,
    League,
    Team,
    Player,
    DraftPrep,
    DraftSettings,
    PlayerSettings,
    RosterSettings,
    ScoringSettings
} from '../src/models'

beforeAll(async () => {
    console.log("setting up env")
    console.log(sequelize.models)
    await sequelize.sync({ force: true });
    console.log("done")
});

// beforeEach(async () => {
//   await sequelize.truncate({ cascade: true });
// });

afterAll(async () => {
    await sequelize.close();
});
