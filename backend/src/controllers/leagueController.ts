import { Request, Response } from 'express';
import League, {LeagueStatus} from '../models/league';
import DraftSettings from '../models/draftSettings';
import ScoringSettings from '../models/scoringSettings';
import RosterSettings from '../models/rosterSettings';
import PlayerSettings from '../models/playerSettings';

// Used AI to help with dealing with associations

// Create League
export const createLeague = async (req: Request, res: Response) => {
    try{
        const { title, leagueIconUrl, season, status, user_id  } = req.body

        const league = await League.create({
            title, leagueIconUrl, season, user_id,
            status: status || LeagueStatus.PRE_DRAFT,
        });

        await ScoringSettings.create({ league_id: league.id });
        await PlayerSettings.create({ league_id: league.id });
        await RosterSettings.create({ league_id: league.id });
        await DraftSettings.create({ league_id: league.id });

        const leagueWithSettings = await League.findByPk(league.id, {
            include: [
                { association: 'scoringSettings' },
                { association: 'playerSettings' },
                { association: 'rosterSettings' },
                { association: 'draftSettings' }
            ]
        });

        res.status(201).json(leagueWithSettings);
    } catch (error) {
        res.status(500).json({ message: 'Error creating league', error });
    }
}

// Get League
export const getLeague = async (req: Request, res: Response) => {
    try {
        const league = await League.findByPk(Number(req.params.id), {
            include: [
                { association: 'user' },
                { association: 'teams' },
                { association: 'scoringSettings' },
                { association: 'playerSettings' },
                { association: 'rosterSettings' },
                { association: 'draftSettings' }
            ]
        });

        if (!league) throw new Error('League not found');

        res.status(200).json(league);
    } catch (error) {
        res.status(500).json({ message: 'Error getting league', error });
    }
};

// Get User Leagues
export const getUserLeagues = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;

        const leagues = await League.findAll({
            where: { user_id },
            include: [
                { association: 'teams' },
                { association: 'scoringSettings' },
                { association: 'playerSettings' },
                { association: 'rosterSettings' },
                { association: 'draftSettings' }
            ]
        });

        res.status(200).json(leagues);
    } catch (error) {
        res.status(500).json({ message: 'Error getting user leagues', error });
    }
}

// Update League
export const updateLeague = async (req: Request, res: Response) => {
    try {
        const league = await League.findByPk(Number(req.params.id));
        if(!league) throw new Error('League not found');

        await league.update(req.body);

        res.status(200).json(league);
    } catch (error) {
        res.status(500).json({ message: 'Error updating league', error });
    }
}

// Delete League
export const deleteLeague = async (req: Request, res: Response) => {
    try {
        const league = await League.findByPk(Number(req.params.id));
        if(!league) throw new Error('League not found');

        await league.destroy();

        res.status(200).json({ message: 'League deleted successfully '});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting league', error });
    }
}