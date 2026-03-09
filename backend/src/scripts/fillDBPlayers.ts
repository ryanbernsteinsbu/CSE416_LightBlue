import Player, { Position, Status } from '../models/player';
import { parse } from "csv-parse/sync";
import readline from "readline";
import csv from "csv-parser";
import fs from "fs";

interface CreatePlayerInput {
    mlbPlayerId: number;
    firstName: string;
    lastName: string;
    isHitter: boolean;
    playablePositions: Position[];
    lastYearStats?: Record<string, number>;
    threeYearAvg?: Record<string, number>;
    projectedStats?: Record<string, number>;
    status: Status;
    seasonsLeft: number;
    realTeam: string;
    realLeague: string;
}
async function addPlayer(data: CreatePlayerInput): Promise<Player| null> {
    try {
        const player = await Player.create({
            mlbPlayerId: data.mlbPlayerId,
            firstName: data.firstName,
            lastName: data.lastName,
            isHitter: data.isHitter,
            playablePositions: data.playablePositions,
            lastYearStats: data.lastYearStats ?? {},
            threeYearAvg: data.threeYearAvg ?? {},
            projectedStats: data.projectedStats ?? {},
            status: data.status,
            seasonsLeft: data.seasonsLeft,
            realTeam: data.realTeam,
            realLeague: data.realLeague
        });
        if(!player){
            console.log("issue")
            return null;
        }
        return player;
    } catch (error) {
        console.error("Error creating player:", error);
        throw error;
    }
}
function mapLeague(team: string): string {
  const AL = [
    "NYY","BOS","TOR","BAL","TB",
    "CLE","DET","MIN","KC","CWS",
    "HOU","SEA","LAA","TEX","OAK"
  ];

  return AL.includes(team) ? "AL" : "NL";
}
function mapPosition(pos: string): Position {
  const map: Record<string, Position> = {
    C: Position.CATCHER,
    "1B": Position.FIRST,
    "2B": Position.SECOND,
    "3B": Position.THIRD,
    SS: Position.SHORTSTOP,
    OF: Position.OUTFIELD,
    P: Position.PITCHER,
    U: Position.UTILITY,
  };
  return map[pos];
}
const nameURL = "https://statsapi.mlb.com/api/v1/people/search?names=";

async function getMLB(lastName: string): Promise<number | null> {
    try {
        const response = await fetch(nameURL + encodeURIComponent(lastName));
        if (!response.ok) {
            return null;
        }

        const data: { people: { id: number }[] } = await response.json();

        if (!data.people || data.people.length === 0) {
            return null;
        }

        return data.people[0].id;
    } catch (error) {
        return null;
    }
}
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//AI was used to write this function
async function parseRow(row: string): Promise<CreatePlayerInput | null>{
  const [fields] = parse(row, {
    relax_quotes: true,
    skip_empty_lines: true,
  }) as string[][];
    console.log();
  // const fields = Object.values(row);
  if(!fields || fields.length === 0){return null};

  const playerField = fields[0].trim().replace(/^"|"$/g, "");
  const [nameAndPos, team] = playerField.split("|").map(s => s.trim());

  const parts = nameAndPos.split(" ");
  // console.log(parts);
  const firstName = parts.slice(0, parts.length - 2).join(" "); // works for multi-word first names
  const lastName = parts[parts.length - 2];
  console.log(firstName + " " + lastName);
  const positions = parts[parts.length - 1].split(",").map(mapPosition); // last part is positions

  const statsNumbers = fields.slice(1).map(Number);

  const [
    AB, R, H, _1B, _2B, _3B,
    HR, RBI, BB, K, SB, CS,
    AVG, OBP, SLG, FPTS
  ] = statsNumbers;
  const mlbID = await getMLB(firstName + " " + lastName);
  if (!mlbID){
      return null;
  }
  return {
    mlbPlayerId: mlbID, // fill after API lookup
    firstName,
    lastName,
    isHitter: true,
    playablePositions: positions,
    lastYearStats: { AB,R,H,"1B":_1B,"2B":_2B,"3B":_3B,HR,RBI,BB,K,SB,CS,AVG,OBP,SLG,FPTS },
    threeYearAvg: { AB,R,H,"1B":_1B,"2B":_2B,"3B":_3B,HR,RBI,BB,K,SB,CS,AVG,OBP,SLG,FPTS },
    projectedStats: { AB,R,H,"1B":_1B,"2B":_2B,"3B":_3B,HR,RBI,BB,K,SB,CS,AVG,OBP,SLG,FPTS },
    status: Status.ACTIVE,
    seasonsLeft: 0,
    realTeam: team,
    realLeague: mapLeague(team)
  };
}

const fileStream = fs.createReadStream("players.csv");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
      await (async () => {
          
          // const entry = await parseRow(line);
          // console.log(entry)
          // if (!entry) return;
          // await addPlayer(entry);
      })();
  }
