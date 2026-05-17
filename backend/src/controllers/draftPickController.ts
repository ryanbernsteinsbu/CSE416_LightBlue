import { Request, Response } from 'express'
import DraftPick from '../models/draftPick';
import Player from '../models/player';
import { Op } from 'sequelize';

export const saveDraftPicks = async (req: Request, res: Response) => {
    try {
        const { picks, teamIds } = req.body;

        if (!Array.isArray(picks) || !Array.isArray(teamIds)) {
            return res.status(400).json({ error: 'picks and teamIds must be arrays' });
        }

        const cleanTeamIds = teamIds
            .map((id) => Number(id))
            .filter((id) => !Number.isNaN(id));

        if (cleanTeamIds.length === 0) {
            return res.status(400).json({ error: 'teamIds cannot be empty' });
        }

        // Remove old draft picks for these teams first.
        await DraftPick.destroy({
            where: {
                team_id: {
                    [Op.in]: cleanTeamIds,
                },
            },
        });

        const cleanPicks = picks
            .filter((pick) => pick.player_id && pick.team_id)
            .map((pick) => ({
                cost: pick.cost,
                player_id: pick.player_id,
                team_id: pick.team_id,
                season: pick.season,
                rosterPosition: pick.rosterPosition,
                draft_time: pick.draft_time || "",
                slotIndex: pick.slotIndex,
            }));

        if (cleanPicks.length > 0) {
            await DraftPick.bulkCreate(cleanPicks);
        }

        res.status(201).json({ success: true });
    } catch (err: any) {
        console.error('Failed to save draft picks:', err.message);
        console.error('Detail:', err.original?.message);
        res.status(500).json({
            error: 'Failed to save draft picks',
            details: err.message,
            detail: err.original?.message,
        });
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