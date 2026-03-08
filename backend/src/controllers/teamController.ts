import { Request, Response } from 'express';
import Team from '../models/team';
import DraftPick from '../models/draftPick';

// Create Team
export const createTeam = async (req: Request, res: Response) => {
     try{
        const { name, budget, league_id } = req.body
        
        const team = await Team.create({
            name, budget, league_id
        })

        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Error creating team', error });
    }
}

// Get Team
export const getTeam = async (req: Request, res: Response) => {
    try {
        const team = await Team.findByPk(Number(req.params.id), {
            include: [
                { association: 'league' },
                { association: 'players' }
            ]
        });

        if (!team) throw new Error('Team not found');

        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Error getting team', error });
    }
};

// Get League Teams
export const getLeagueTeams = async (req: Request, res: Response) => {
    try {
        const { league_id } = req.params;

        const teams = await Team.findAll({
            where: { league_id },
            include: [
                { association: 'players' },
            ]
        });

        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Error getting league teams', error });
    }
}

// Update Team
export const updateTeam = async (req: Request, res: Response) => {
    try {
        const team = await Team.findByPk(Number(req.params.id));
        if(!team) throw new Error('Team not found');

        await team.update(req.body);

        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Error updating team', error });
    }
}

// Delete Team
export const deleteTeam = async (req: Request, res: Response) => {
    try {
        const team = await Team.findByPk(Number(req.params.id));
        if(!team) throw new Error('Team not found');

        await team.destroy();

        res.status(200).json({ message: 'Team deleted successfully '});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team', error });
    }
}