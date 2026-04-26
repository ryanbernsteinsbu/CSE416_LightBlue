import { Request, Response } from 'express'
import DraftPick from '../models/draftPick';
import Player from '../models/player';

export const saveDraftPicks = async (req: Request, res: Response) => {
    try {
        const { picks, teamIds } = req.body;

        if (!Array.isArray(picks) || !Array.isArray(teamIds)) {
            return res.status(400).json({ error: 'picks and teamIds must be arrays' });
        }

        for (const pick of picks) {
            const existingPick = await DraftPick.findOne({
                where: {
                    team_id: pick.team_id,
                    rosterPosition: pick.rosterPosition
                }
            });

            if (existingPick) {
                await existingPick.update({
                    cost: pick.cost,
                    player_id: pick.player_id,
                    season: pick.season,
                    draft_time: pick.draft_time  // ← new
                });
            } else {
                await DraftPick.create(pick);
            }
        }

        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Failed to save draft picks:', err);
        res.status(500).json({ error: 'Failed to save draft picks', details: err });
    }
};

export const getTeamDraftPicks = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const picks = await DraftPick.findAll({
            where: { team_id: id },
            include: [{ model: Player, as: 'player' }],
            order: [['id', 'DESC']]
        });

        res.status(200).json(picks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch draft picks', details: err });
    }
};