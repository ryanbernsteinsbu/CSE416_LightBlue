import { Request, Response } from 'express';
import * as leagueController from '../controllers/leagueController';
import League, { LeagueStatus } from '../models/league';
import DraftSettings from '../models/draftSettings';
import ScoringSettings from '../models/scoringSettings';
import RosterSettings from '../models/rosterSettings';
import PlayerSettings from '../models/playerSettings';
import Team from '../models/team';
import DraftPick from '../models/draftPick';

// Mocking all models
jest.mock('../models/league');
jest.mock('../models/draftSettings');
jest.mock('../models/scoringSettings');
jest.mock('../models/rosterSettings');
jest.mock('../models/playerSettings');
jest.mock('../models/team');
jest.mock('../models/draftPick');

const MockLeague = League as jest.Mocked<typeof League>;
const MockTeam = Team as jest.Mocked<typeof Team>;
const MockDraftPick = DraftPick as jest.Mocked<typeof DraftPick>;
const MockScoringSettings = ScoringSettings as jest.Mocked<typeof ScoringSettings>;
const MockPlayerSettings = PlayerSettings as jest.Mocked<typeof PlayerSettings>;
const MockRosterSettings = RosterSettings as jest.Mocked<typeof RosterSettings>;
const MockDraftSettings = DraftSettings as jest.Mocked<typeof DraftSettings>;

// Mocking req and res
const mockReq = (overrides: Partial<Request> = {}): Request =>
    ({body: {}, params: {}, query: {}, ...overrides } as Request);

const mockRes = (): Response => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};

const mockLeagueInstance = {
    id: 1,
    title: 'Test League',
    leagueIconUrl: null,
    season: 2025,
    status: LeagueStatus.PRE_DRAFT,
    user_id: 42,
    update: jest.fn().mockResolvedValue(undefined),
    destroy: jest.fn().mockResolvedValue(undefined),
};

const mockLeagueBody = {
    title: 'Test League',
    leagueIconUrl: null,
    season: 2025,
    status: LeagueStatus.PRE_DRAFT,
    user_id: 42,
    draftSettings: { numTeams: 2, budget: 260 },
    rosterSettings: { rosterSize: 25 },
    playerSettings: { maxHitters: 14 },
    scoringSettings: { homeRuns: 4 },
};

// Testing: create league
describe('createLeague', () => {
    beforeEach(() => jest.clearAllMocks());

    it('should return 201 for successful league creation', async() => {
        MockLeague.create.mockResolvedValue(mockLeagueInstance as any);
        MockScoringSettings.create.mockResolvedValue({} as any);
        MockPlayerSettings.create.mockResolvedValue({} as any);
        MockRosterSettings.create.mockResolvedValue({} as any);
        MockDraftSettings.create.mockResolvedValue({} as any);
        MockTeam.create.mockResolvedValue({} as any);
        MockLeague.findByPk.mockResolvedValue(mockLeagueInstance as any);

        const req = mockReq({ body: mockLeagueBody });
        const res = mockRes();

        await leagueController.createLeague(req, res);
        
    })
});

// Testing: delete league

// // Create League
// export const createLeague = async (req: Request, res: Response) => {
//     try {
//         const {
//             title,
//             leagueIconUrl,
//              season,
//             status,
//             user_id,
//             draftSettings,
//             rosterSettings,
//             playerSettings,
//             scoringSettings,
//         } = req.body;

//         const league = await League.create({
//             title,
//             leagueIconUrl,
//             season,
//             user_id,
//             status: status || LeagueStatus.PRE_DRAFT,
//         });

//         await ScoringSettings.create({
//             league_id: league.id,
//             ...scoringSettings,
//         });

//         await PlayerSettings.create({
//             league_id: league.id,
//             ...playerSettings,
//         });

//         await RosterSettings.create({
//             league_id: league.id,
//             ...rosterSettings,
//         });

//         await DraftSettings.create({
//             league_id: league.id,
//             ...draftSettings,
//         });

//         for (let i = 0; i < (draftSettings?.numTeams ?? 0); i++) {
//             await Team.create({
//                 league_id: league.id,
//                 name: `Team ${i + 1}`,
//                 budget: draftSettings?.budget ?? null,
//             });
//         }

//         const createdLeague = await League.findByPk(league.id, {
//             include: [
//                 { model: ScoringSettings, as: 'scoringSettings' },
//                 { model: PlayerSettings, as: 'playerSettings' },
//                 { model: RosterSettings, as: 'rosterSettings' },
//                 { model: DraftSettings, as: 'draftSettings' },
//             ],
//         });


//         res.status(201).json(createdLeague);
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating league', error });
//     }
// };

// // Get League
// export const getLeague = async (req: Request, res: Response) => {
//     try {
//         const league = await League.findByPk(Number(req.params.id), {
//             include: [
//                 { association: 'user' },
//                 { association: 'teams' },
//                 { association: 'scoringSettings' },
//                 { association: 'playerSettings' },
//                 { association: 'rosterSettings' },
//                 { association: 'draftSettings' }
//             ]
//         });

//         if (!league) throw new Error('League not found');

//         res.status(200).json(league);
//     } catch (error) {
//         res.status(500).json({ message: 'Error getting league', error });
//     }
// };

// // Get User Leagues
// export const getUserLeagues = async (req: Request, res: Response) => {
//     try {
//         const { user_id } = req.params;

//         const leagues = await League.findAll({
//             where: { user_id },
//             include: [
//                 { association: 'teams' },
//                 { association: 'scoringSettings' },
//                 { association: 'playerSettings' },
//                 { association: 'rosterSettings' },
//                 { association: 'draftSettings' }
//             ]
//         });

//         res.status(200).json(leagues);
//     } catch (error: any) {
//         console.error('Error getting user leagues:', error.message);
//         res.status(500).json({ message: 'Error getting user leagues', error: error.message });
//     }
// }

// // Update League
// export const updateLeague = async (req: Request, res: Response) => {
//     try {
//         const league = await League.findByPk(Number(req.params.id));
//         if (!league) throw new Error('League not found');

//         await league.update(req.body);

//         res.status(200).json(league);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating league', error });
//     }
// }

// // Delete League
// export const deleteLeague = async (req: Request, res: Response) => {
//     try {
//         const league = await League.findByPk(Number(req.params.id));
//         if (!league) throw new Error('League not found');

//         const teams = await Team.findAll({ where: { league_id: league.id } });
//         const teamIds = teams.map(t => t.id);

//         // delete fraft picks for all teams in the league
//         if (teamIds.length > 0) {
//             await DraftPick.destroy({ where: { team_id: teamIds } })
//         }
//         await Team.destroy({ where: { league_id: league.id } });
//         await ScoringSettings.destroy({ where: { league_id: league.id } });
//         await PlayerSettings.destroy({ where: { league_id: league.id } });
//         await RosterSettings.destroy({ where: { league_id: league.id } });
//         await DraftSettings.destroy({ where: { league_id: league.id } });

//         await league.destroy();

//         res.status(200).json({ message: 'League deleted successfully' });
//     } catch (error: any) {
//         console.error('Error deleting league:', error.message);
//         res.status(500).json({ message: 'Error deleting league', error: error.message });
//     }
// }