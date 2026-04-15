import { getPlayerStats, findPlayerById, findAllPlayers} from '../repositories/playerRepository';
import Player from '../models/player'

// Getting summary of league stats
export const getLeagueStats = async() => {
    const players = await findAllPlayers();
    
    const hitters = players.filter(p => p.isHitter);
    const pitchers = players.filter(p => !p.isHitter);

    return {
        hitters: computeLeagueSummary(hitters),
        pitchers: computeLeagueSummary(pitchers)
    }
}

// Computing summary of league stats
export const computeLeagueSummary = (players: Player[]): Record<string, Record<string, {min: number; max: number; avg: number}>> => {
    // Collecting min, max, and average of each stat for each set of stats
    const statSets = ['lastYearStats', 'threeYearAvg', 'projectedStats'] as const;
    const summary: Record<string, Record<string, {min: number, max: number, avg: number}>> = {}; // e.g., lastYearStats: { G: {min: 10, max: 11, avg: 10.5}}

    for(const statSet of statSets) {
        const allStats = players.map(player => player[statSet]); // Get the data from the particular player stat
        const statLabels = Object.keys(allStats[0])

        summary[statSet] = {};

        for(const statLabel of statLabels) { // Going through each individual stat
            const values = allStats.map(s => s[statLabel]).filter(v => v !== null && v !== undefined); // Getting the proper stat for each player (minus the ones that are null)
            summary[statSet][statLabel] = {
                min: Math.min(...values),
                max: Math.max(...values),
                avg: values.reduce((a,b) => a + b, 0) / values.length,
            };
        }
    }

    return summary;
}

// Normalize player data
export const getNormalizeStats = (playerStats: Record<string, Record<string, number>>, leagueSummary: Record<string, Record<string, {min: number; max: number; avg: number}>>) : Record<string, Record<string, number>> => {
    const normalized: Record<string, Record<string, number>> = {}
    const statSets = ['lastYearStats', 'threeYearAvg', 'projectedStats'] as const;

    for(const statSet of statSets){
        const statLabels = Object.keys(leagueSummary[statSet])
        
        normalized[statSet] = {};

        for(const statLabel of statLabels){
            const { min, max } = leagueSummary[statSet][statLabel];
            normalized[statSet][statLabel] = (playerStats[statSet][statLabel] - min) / (max-min);
        }
    }

    return normalized;
}

// IL Adjustments

// Age Adjustments

// Consistent/Upward Stats Adjustments

// Low IP Adjustment

// Low AB Adjustment

// Calculating Pitching Score
export const getPitchingScore = (playerStats: Record<string, Record<string, number>>, pitcherSummary: Record<string, Record<string, {min: number; max: number; avg: number}>>) : Record<string, number> => {
    const normalizedStats = getNormalizeStats(playerStats, pitcherSummary);

    const statSets = ['lastYearStats', 'threeYearAvg', 'projectedStats'] as const;
    const score: Record<string, number> = {};

    for(const statSet of statSets){        
        score[statSet] = (1-normalizedStats[statSet].WHIP) * 0.2
                        + (1-normalizedStats[statSet].ERA) * 0.2
                        + (normalizedStats[statSet].SO) * 0.15
                        + (normalizedStats[statSet].IP) * 0.15
                        + (normalizedStats[statSet].W) * 0.1
                        + (normalizedStats[statSet].SV) * 0.1
                        + (normalizedStats[statSet].GS) * 0.1
                        + (1-normalizedStats[statSet].HR) * 0.011
                        // + (1-normalizedStats[statSet].SVG) * 0.011
                        + (normalizedStats[statSet].G) * 0.011
                        // + (normalizedStats[statSet].CG) * 0.011
                        // + (normalizedStats[statSet].SHO) * 0.011
                        // + (1-normalizedStats[statSet].R) * 0.011
                        // + (1-normalizedStats[statSet].HB) * 0.011;
    }

//     final_pitching_data = pitching_data[
//     [
//         "Name", "Age", "mlbID", "Lev","Tm", "Age", "G",
//         "GS", "W", "SV", "IP", "H", "ER",
//         "BB", "SO", "HR", "ERA", "WHIP",
//         "BF", "SO/W", "SB", "PO"
//     ]
// ]
    return score;
}

// Calculating Hitting Score
export const getHittingScore = (playerStats: Record<string, Record<string, number>>, hitterSummary: Record<string, Record<string, {min: number; max: number; avg: number}>>) : Record<string, number> => {
    const normalizedStats = getNormalizeStats(playerStats, hitterSummary);

    const statSets = ['lastYearStats', 'threeYearAvg', 'projectedStats'] as const;
    const score: Record<string, number> = {};

    for(const statSet of statSets){      
        score[statSet] = (normalizedStats[statSet].HR) * 0.175
                        + (normalizedStats[statSet].RBI) * 0.155
                        + (normalizedStats[statSet].SB) * 0.125
                        + (normalizedStats[statSet].OBP) * 0.100
                        + (normalizedStats[statSet].SLG) * 0.100
                        + (normalizedStats[statSet].R) * 0.075
                        + (normalizedStats[statSet].H) * 0.075
                        + (normalizedStats[statSet].BB) * 0.060
                        // + (normalizedStats[statSet].SBR) * 0.055
                        + (normalizedStats[statSet]._2B) * 0.025,
                        + (normalizedStats[statSet].AB) * 0.020
                        // + (1-normalizedStats[statSet].SO) * 0.020;
                        + (normalizedStats[statSet]._3B) * 0.015;
    }

//     final_data = data[ # get required fields
//     [
//         "Name", "Age", "mlbID", "Lev","Tm", "Age", "PA",
//         "AB", "R", "H", "1B", "2B", "3B", "HR",
//         "RBI", "BB", "K", "SB", "CS",
//         "AVG", "OBP", "SLG"
//     ]
// ]
    return score;
}

export const getPlayerRank = async(id: number): Promise<number> => {
    const {type, lastYearStats, threeYearAvg, projectedStats } = await getPlayerStats(id);
    const playerStats: Record<string, Record<string, number>> = {
        'lastYearStats': lastYearStats,
        'threeYearAvg': threeYearAvg,
        'projectedStats': projectedStats
    }
    const leagueStats = await getLeagueStats();

    if (type === 'hitter'){
        const score = getHittingScore(playerStats, leagueStats.hitters);
        const baseScore = 0.5 * score['lastYearStats'] + 0.3 * score['threeYearAvg'] + 0.2 * score['projectedStats'];
        
        // const score: Record<string, number> = getHittingScore();
        // get old stats
        // average stats
        // apply adjustments based on the data
        // get last year stats
        // get three year average stats
        // get projected stats

        // return lastYearStas * 0.5 + threeYearAvg * 0.3 + projected stats * 0.2;
        return baseScore;
    } else {
        const score = getPitchingScore(playerStats, leagueStats.pitchers);
        const baseScore = 0.5 * score['lastYearStats'] + 0.3 * score['threeYearAvg'] + 0.2 * score['projectedStats'];
        
        // const score: Record<string, number> = getHittingScore();
        // get old stats
        // average stats
        // apply adjustments based on the data
        // get last year stats
        // get three year average stats
        // get projected stats

        // return lastYearStas * 0.5 + threeYearAvg * 0.3 + projected stats * 0.2;
        return baseScore;
    }
}