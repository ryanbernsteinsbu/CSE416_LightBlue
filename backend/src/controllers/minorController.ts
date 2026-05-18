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

export async function getTable(req: any, res: any) {
  try {
    const table = await MinorTable.findOne({
      where: { team_id: req.params.teamId },
      include: [
        {
          model: MinorLeaguePick,
          as: "players",
          include: [{ model: Player, as: "player" }],
        },
      ],
      order: [
        [
          { model: MinorLeaguePick, as: "players" },
          "slotIndex",
          "ASC",
        ],
      ],
    });

    // Add this null check
    if (!table) {
      return res.status(404).json({
        error: "No minor league table found",
      });
    }

    res.json(table);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch minor league table",
    });
  }
}

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