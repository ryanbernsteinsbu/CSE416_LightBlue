import {
  TABS,
  INITIAL_PLAYER_SETTINGS,
  INITIAL_ROSTER_SETTINGS,
  INITIAL_SCORING_SETTINGS,
  INITIAL_DRAFT_SETTINGS,
  buildLeaguePayload,
} from "../src/components/CreateLeagueHelpers";

// ── TABS ──────────────────────────────────────────────────────────────────────

test("TABS has four entries", () => {
  expect(TABS).toHaveLength(4);
});

test("TABS contains draft, players, roster, scoring keys", () => {
  const keys = TABS.map((t) => t.key);
  expect(keys).toContain("draft");
  expect(keys).toContain("players");
  expect(keys).toContain("roster");
  expect(keys).toContain("scoring");
});

test("every TAB entry has a key and label", () => {
  TABS.forEach((t) => {
    expect(t.key).toBeTruthy();
    expect(t.label).toBeTruthy();
  });
});

// ── INITIAL SETTINGS ──────────────────────────────────────────────────────────

test("INITIAL_PLAYER_SETTINGS has ohtaniRule and division as MIXED", () => {
  expect(INITIAL_PLAYER_SETTINGS.ohtaniRule).toBe("MIXED");
  expect(INITIAL_PLAYER_SETTINGS.division).toBe("MIXED");
});

test("INITIAL_ROSTER_SETTINGS has expected position counts", () => {
  expect(INITIAL_ROSTER_SETTINGS.numCatchers).toBe(2);
  expect(INITIAL_ROSTER_SETTINGS.numOutfield).toBe(5);
  expect(INITIAL_ROSTER_SETTINGS.numPitchers).toBe(9);
  expect(INITIAL_ROSTER_SETTINGS.numTaxi).toBe(8);
  expect(INITIAL_ROSTER_SETTINGS.numMinor).toBe(8);
});

test("INITIAL_SCORING_SETTINGS has hitting and pitching weights", () => {
  expect(typeof INITIAL_SCORING_SETTINGS.hrWeight).toBe("number");
  expect(typeof INITIAL_SCORING_SETTINGS.eraWeight).toBe("number");
  expect(typeof INITIAL_SCORING_SETTINGS.whipWeight).toBe("number");
});

test("INITIAL_SCORING_SETTINGS stat window flags default to true", () => {
  expect(INITIAL_SCORING_SETTINGS.useLastYear).toBe(true);
  expect(INITIAL_SCORING_SETTINGS.useThreeYearAvg).toBe(true);
  expect(INITIAL_SCORING_SETTINGS.useProjected).toBe(true);
});

test("INITIAL_DRAFT_SETTINGS has budget 260 and numTeams 0", () => {
  expect(INITIAL_DRAFT_SETTINGS.budget).toBe(260);
  expect(INITIAL_DRAFT_SETTINGS.numTeams).toBe(0);
});

// ── buildLeaguePayload ────────────────────────────────────────────────────────

const baseArgs = {
  leagueName: "  My League  ",
  logoPreview: "http://example.com/logo.png",
  logoFile: null,
  draftSettings: INITIAL_DRAFT_SETTINGS,
  scoringSettings: INITIAL_SCORING_SETTINGS,
  playerSettings: INITIAL_PLAYER_SETTINGS,
  rosterSettings: INITIAL_ROSTER_SETTINGS,
};

test("buildLeaguePayload trims the league name", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.name).toBe("My League");
});

test("buildLeaguePayload sets status to ACTIVE", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.status).toBe("ACTIVE");
});

test("buildLeaguePayload includes draftSettings budget", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.draftSettings.budget).toBe(260);
});

test("buildLeaguePayload includes scoringSettings weights", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(typeof payload.scoringSettings.hrWeight).toBe("number");
  expect(typeof payload.scoringSettings.eraWeight).toBe("number");
});

test("buildLeaguePayload includes rosterSettings positions", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.rosterSettings.numCatchers).toBe(2);
  expect(payload.rosterSettings.numOutfield).toBe(5);
});

test("buildLeaguePayload includes playerSettings division and ohtaniRule", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.playerSettings.division).toBe("MIXED");
  expect(payload.playerSettings.ohtaniRule).toBe("MIXED");
});

test("buildLeaguePayload sets season to current year", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.season).toBe(new Date().getFullYear());
});

test("buildLeaguePayload has a non-empty id", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.id).toBeTruthy();
});

test("buildLeaguePayload sets logoUrl from logoPreview", () => {
  const payload = buildLeaguePayload(baseArgs);
  expect(payload.logoUrl).toBe("http://example.com/logo.png");
});

test("buildLeaguePayload sets logoUrl to empty string when logoPreview is falsy", () => {
  const payload = buildLeaguePayload({ ...baseArgs, logoPreview: "" });
  expect(payload.logoUrl).toBe("");
});