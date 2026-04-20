// Mocks
jest.mock('../config/database', () => ({
  default: { define: jest.fn(), authenticate: jest.fn(), sync: jest.fn(), query: jest.fn() }
}));

jest.mock('../models/player', () => ({
  default: { init: jest.fn(), findAll: jest.fn(), findOne: jest.fn(), create: jest.fn(), update: jest.fn(), destroy: jest.fn() },
  Position: { CATCHER: 'CATCHER', FIRST: 'FIRST', SECOND: 'SECOND', THIRD: 'THIRD', SHORTSTOP: 'SHORTSTOP', OUTFIELD: 'OUTFIELD', PITCHER: 'PITCHER', UTILITY: 'UTILITY' },
  Status: { ACTIVE: 'ACTIVE', IL_10: 'IL_10', IL_15: 'IL_15', IL_60: 'IL_60', MINORS: 'MINORS', OUT: 'OUT' }
}));

import * as draftPickController from '../controllers/draftPickController';
import DraftPick from '../models/draftPick';
import Player from '../models/player';

// // Save all the picks from a draft session at once

// export const saveDraftPicks = async (req: Request, res: Response) => {
//     try {
//         const { picks, teamIds } = req.body; 

//         if (!Array.isArray(picks) || !Array.isArray(teamIds)) {
//             return res.status(400).json({ error: 'picks and teamIds must be arrays' });
//         }

//         //const teamIds = [...new Set(picks.map((p: any) => p.team_id))];

//         await DraftPick.destroy({
//             where: { team_id: teamIds }
//         });

//         if (picks.length > 0) {
//             await DraftPick.bulkCreate(picks, { validate: true });
//         }
//         res.status(201).json({success: true});
//     } catch (err) {
//         console.error('Failed to save draft picks:', err);
//         res.status(500).json({ error: 'Failed to save draft picks', details: err });
//     }
// };

// export const getTeamDraftPicks = async(req: Request, res: Response) => {
//     try {
//         const { id } = req.params;

//         const picks = await DraftPick.findAll({
//             where: { team_id: id },
//             include: [{ model: Player, as: 'player' }],
//         });

//         res.status(200).json(picks);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to fetch draft picks', details: err});
//     }
// };