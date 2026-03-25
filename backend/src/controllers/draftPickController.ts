
import { Request, Response } from 'express'
import DraftPick from '../models/draftPick';
import Player from '../models/player';

export const createDraftPick = async (req: Request, res: Response) => {
    try {
        const { cost, rosterPosition, team_id, player_id } = req.body;

        const pick = await DraftPick.create({
            cost,
            rosterPosition,
            team_id,
            player_id,
        });

        res.status(201).json(pick);
    } catch (err) {
        res.status(500).json({error: 'Failed to create draft pick', details: err });
    }
};

// Save all the picks from a draft session at once

export const bulkCreateDraftPicks = async (req: Request, res: Response) => {
    try {
        const { picks } = req.body;
        const created = await DraftPick.bulkCreate(picks, {validate: true});

        res.status(201).json(created);
    } catch (err) {
        res.status(500).json({error: 'Failed to save draft picks', details: err });
    }
};

export const getTeamDraftPicks = async(req: Request, res: Response) => {
    try {
        const { teamId } = req.params;

        const picks = await DraftPick.findAll({
            where: {team_id: teamId},
            include: [{model: Player, as: 'player'}], // joins player data
        });

        res.status(200).json(picks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch draft picks', details: err});
    }
};