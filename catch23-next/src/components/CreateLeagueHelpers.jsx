export const TABS = [
  { key: "draft", label: "Draft" },
  { key: "players", label: "Players" },
  { key: "roster", label: "Roster" },
  { key: "scoring", label: "Scoring" },
];

export const INITIAL_PLAYER_SETTINGS = {
  ohtaniRule: "MIXED",
  division: "MIXED",
};

export const INITIAL_ROSTER_SETTINGS = {
  numCatchers: 2,
  numFirstBase: 1,
  numSecondBase: 1,
  numThirdBase: 1,
  numShortstop: 1,
  numCornerInfield: 1,
  numMiddleInfield: 1,
  numOutfield: 5,
  numUtility: 1,
  numPitchers: 9,
  numTaxi: 8,
  numMinor: 8
};

export const INITIAL_SCORING_SETTINGS = {
  hrWeight: 0.175,
  rbiWeight: 0.155,
  sbWeight: 0.125,
  avgWeight: 0.150,
  runsWeight: 0.125,
  eraWeight: 0.200,
  whipWeight: 0.200,
  winsWeight: 0.100,
  strikeoutsWeight: 0.150,
  savesWeight: 0.100,
  useLastYear: true,
  useThreeYearAvg: true,
  useProjected: true,
};

export const INITIAL_DRAFT_SETTINGS = {
  budget: 260,
  numTeams: 0,
};

export function buildLeaguePayload({
  leagueName,
  logoPreview,
  logoFile,
  draftSettings,
  scoringSettings,
  playerSettings,
  rosterSettings,
}) {
  return {
    id: crypto.randomUUID(),
    name: leagueName.trim(),
    logoUrl: logoPreview || "",
    currRank: 0,
    projectFinish: 0,
    dateMade: new Date(),
    season: new Date().getFullYear(),
    status: "ACTIVE",
    draftSettings: {
      budget: draftSettings.budget,
      numTeams: draftSettings.numTeams,
    },
    scoringSettings: {
      hrWeight: scoringSettings.hrWeight,
      rbiWeight: scoringSettings.rbiWeight,
      sbWeight: scoringSettings.sbWeight,
      avgWeight: scoringSettings.avgWeight,
      runsWeight: scoringSettings.runsWeight,
      eraWeight: scoringSettings.eraWeight,
      whipWeight: scoringSettings.whipWeight,
      winsWeight: scoringSettings.winsWeight,
      strikeoutsWeight: scoringSettings.strikeoutsWeight,
      savesWeight: scoringSettings.savesWeight,
      useLastYear: scoringSettings.useLastYear,
      useThreeYearAvg: scoringSettings.useThreeYearAvg,
      useProjected: scoringSettings.useProjected,
    },
    playerSettings: {
      ohtaniRule: playerSettings.ohtaniRule,
      division: playerSettings.division
    },
    rosterSettings: {
      numCatchers: rosterSettings.numCatchers,
      numFirstBase: rosterSettings.numFirstBase,
      numSecondBase: rosterSettings.numSecondBase,
      numThirdBase: rosterSettings.numThirdBase,
      numShortstop: rosterSettings.numShortstop,
      numCornerInfield: rosterSettings.numCornerInfield,
      numMiddleInfield: rosterSettings.numMiddleInfield,
      numOutfield: rosterSettings.numOutfield,
      numUtility: rosterSettings.numUtility,
      numPitchers: rosterSettings.numPitchers,
      numTaxi: rosterSettings.numTaxi,
      numMinor: rosterSettings.numMinor
    },
    logoFile,
  };
}