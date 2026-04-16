import { Request, Response } from 'express';
import { getPlayerRank } from '../services/rankingService';

export const getPlayerRankController = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.body);
        if (isNaN(id)){
            return res.status(400).json({error: 'Invalid player ID'});
        }

        const rank = await getPlayerRank(id);
        return res.status(200).json({playerId: id, rank});

    } catch (err: any) {
        res.status(404).json({ error: err.message });
    }
}