import { Request, Response } from 'express';
import MinorTable from '../models/minorTable';
import MinorLeaguePick from '../models/minorLeaguePick';
import Player from '../models/player';

export const getTable = async (req: Request, res: Response) => {
    try {
        const minorTable = await MinorTable.findOne({
            where: { team_id: req.params.teamId },
            include: [{
                model: MinorLeaguePick,
                as: "players",
                include: [{ model: Player }],
            }],
            order: [[{ model: MinorLeaguePick, as: "players" }, "slotIndex", "ASC"]]
        });
        if (!minorTable) return res.status(404).json({ error: "No minor league table found" });
        res.json(minorTable);
    } catch (err) {
        console.error("Error fetching minor league table:", err);
        res.status(500).json({ error: "Failed to fetch minor league table" });
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
        console.error("Error saving minor league picks:", err);
        res.status(500).json({ error: "Failed to save picks" });
    }
};