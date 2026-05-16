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
                    slotIndex: pick.slotIndex  // ← use slotIndex instead
                }
            });

            if (existingPick) {
                await existingPick.update({
                    cost: pick.cost,
                    player_id: pick.player_id,
                    season: pick.season,
                    rosterPosition: pick.rosterPosition,
                    draft_time: pick.draft_time
                });
            } else {
                await DraftPick.create(pick);
            }
        }

        res.status(201).json({ success: true });
    } catch (err: any) {
        console.error('Failed to save draft picks:', err.message);
        console.error('Detail:', err.original?.message);
        res.status(500).json({ error: 'Failed to save draft picks', details: err.message, detail: err.original?.message });
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
    } catch (err: any) {
        console.error('Failed to fetch draft picks:', err.message);
        console.error('Detail:', err.original?.message);
        res.status(500).json({ error: 'Failed to fetch draft picks', detail: err.message, original: err.original?.message });
    }
};