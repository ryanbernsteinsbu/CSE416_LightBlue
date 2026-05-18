import { Request, Response } from 'express';
import MinorTable from '../models/minorTable';
import MinorLeaguePick from '../models/minorLeaguePick';
import Player from '../models/player';

const INCLUDE_PICKS = [
    {
        model: MinorLeaguePick,
        as: 'players',
        include: [{ model: Player, as: 'player' }],
    },
];

const ORDER_BY_SLOT = [
    [{ model: MinorLeaguePick, as: 'players' }, 'slotIndex', 'ASC'],
] as any;

export const getTable = async (req: Request, res: Response) => {
    try {
        const { teamId } = req.params;

        // Find the table for this team
        let minorTable = await MinorTable.findOne({
            where: { team_id: teamId },
            include: INCLUDE_PICKS,
            order: ORDER_BY_SLOT,
        });

        // Auto-create the table if it doesn't exist yet.
        // This prevents 404s for teams that pre-date the minor league feature,
        // and stops the frontend from ending up with tableId === null (which
        // causes saves to be silently skipped).
        if (!minorTable) {
            minorTable = await MinorTable.create({
                team_id: teamId,
                numPlayers: 10,
            });
            // Attach an empty picks array so the response shape is consistent
            (minorTable as any).players = [];
        }

        res.json(minorTable);
    } catch (err) {
        console.error('Error fetching minor league table:', err);
        res.status(500).json({ error: 'Failed to fetch minor league table' });
    }
};

export const savepicks = async (req: Request, res: Response) => {
    try {
        const { picks } = req.body;
        await MinorLeaguePick.destroy({ where: { table_id: req.params.tableId } });
        await MinorLeaguePick.bulkCreate(
            picks.map((p: any) => ({ ...p, table_id: req.params.tableId }))
        );
        res.json({ success: true });
    } catch (err) {
        console.error('Error saving minor league picks:', err);
        res.status(500).json({ error: 'Failed to save picks' });
    }
};