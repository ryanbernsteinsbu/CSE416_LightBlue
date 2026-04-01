import Player, { Position, Status } from '../models/player';

// Create a new player
export const createPlayer = async (
    mlbPlayerId: string, 
    firstName: string,
    lastName: string,
    isHitter: boolean,
    playablePositions: Position[],
    lastYearStats: Record<string, number>,
    threeYearAvg: Record<string, number>,
    projectedStats: Record<string, number>,
    status: Status,
    seasonsLeft: number,
    realTeam: string,
    realLeague: String
): Promise<Player> => {
    return await Player.create({ mlbPlayerId, firstName, lastName, isHitter, playablePositions,
        lastYearStats, threeYearAvg, projectedStats, status, seasonsLeft, realTeam, realLeague });
}

// Find all players
export const findAllPlayers = async (): Promise<Player[]> => {
    return await Player.findAll();
};

// Find a player by their ID
export const findPlayerById = async (id: number): Promise<Player | null> => {
    return await Player.findByPk(id);
};

// Find a player by MLB Player ID
export const findPlayerByMlbId = async (mlbPlayerId: string): Promise<Player | null> => {
    return await Player.findOne({ where: { mlbPlayerId } });
};

// Find a player by Position
export const findPlayerByPosition = async (position: Position): Promise<Player[]> => {
    return await Player.findAll({ where: { position } });
};

// Find a player by Status
export const findPlayerByStatus = async (status: Status): Promise<Player[]> => {
    return await Player.findAll({ where: { status } });
};

// Update a player
export const updatePlayer = async (id: number, updates: Partial<Player>): Promise<Player | null> => {
    const player = await Player.findByPk(id);
    if (!player) return null;
    return await player.update(updates);
};

// Delete a player
export const deletePlayer = async (id: number): Promise<boolean> => {
    const player = await Player.findByPk(id);
    if (!player) return false;
    await player.destroy();
    return true;
};