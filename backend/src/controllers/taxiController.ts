import { Request, Response } from 'express'
import TaxiPick from '../models/taxiPick';
import Player from '../models/player';

export const saveTaxiPicks = async (req: Request, res: Response) => {
    try {
        const { picks, teamIds } = req.body;

        if (!Array.isArray(picks) || !Array.isArray(teamIds)) {
            return res.status(400).json({ error: 'picks and teamIds must be arrays' });
        }

        // wipe existing picks for these teams, then reinsert clean
        await TaxiPick.destroy({ where: { team_id: teamIds } });

        if (picks.length > 0) {
            await TaxiPick.bulkCreate(picks);
        }

        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Failed to save taxi picks:', err);
        res.status(500).json({ error: 'Failed to save taxi picks', details: err });
    }
};

export const getTeamTaxiPicks = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const picks = await TaxiPick.findAll({
            where: { team_id: id },
            include: [{ model: Player, as: 'player' }],
            order: [['slot', 'ASC']]
        })
        res.status(200).json(picks);
    } catch (err) {
        console.error('Failed to fetch taxi picks:', err);
        res.status(500).json({ error: 'Failed to fetch taxi picks', details: err });
    }
};