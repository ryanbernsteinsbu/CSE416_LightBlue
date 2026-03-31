
import { Request, Response } from 'express'
import DraftPick from '../models/draftPick';
import Player from '../models/player';

// Don't need this as of now
// export const createDraftPick = async (req: Request, res: Response) => {
//     try {
//         const { cost, rosterPosition, team_id, player_id } = req.body;

//         const pick = await DraftPick.create({
//             cost,
//             rosterPosition,
//             team_id,
//             player_id,
//         });

//         res.status(201).json(pick);
//     } catch (err) {
//         res.status(500).json({error: 'Failed to create draft pick', details: err });
//     }
// };

// Save all the picks from a draft session at once

export const saveDraftPicks = async (req: Request, res: Response) => {
    try {
        const { picks } = req.body;

        if (!Array.isArray(picks)) {
            return res.status(400).json({ error: 'picks must be an array' });
        }

        const teamIds = [...new Set(picks.map((p: any) => p.team_id))];

        await DraftPick.destroy({
            where: { team_id: teamIds }
        });

        const created = await DraftPick.bulkCreate(picks, { validate: true });

        res.status(201).json(created);
    } catch (err) {
        console.error('Failed to save draft picks:', err);
        res.status(500).json({ error: 'Failed to save draft picks', details: err });
    }
};

export const getTeamDraftPicks = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const picks = await DraftPick.findAll({
            where: { team_id: id },
            include: [{ model: Player, as: 'player' }],
        });

        res.status(200).json(picks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch draft picks', details: err});
    }
};