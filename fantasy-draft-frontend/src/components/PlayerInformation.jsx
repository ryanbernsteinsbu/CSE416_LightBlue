import { useMemo, useState } from "react";

// dummy data for now
const MOCK_PLAYERS = [
  {
    id: "p1",
    firstName: "Edwin",
    lastName: "Díaz",
    team: "LAD",
    pos: "RP",
    age: 30,
    stats: { W: 6, SV: 28, K: 98, AVG: 0.164, ERA: 1.63, WHIP: 0.87, HR: 0, RBI: 0, SB: 0, R: 0, OBP: 0.0 },
  },
  {
    id: "p2",
    firstName: "José",
    lastName: "Ramírez",
    team: "CLE",
    pos: "3B",
    age: 32,
    stats: { HR: 30, RBI: 85, SB: 44, AVG: 0.283, R: 103, OBP: 0.36, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
  },
  {
    id: "p3",
    firstName: "Mookie",
    lastName: "Betts",
    team: "LAD",
    pos: "RF",
    age: 31,
    stats: { HR: 22, RBI: 67, SB: 14, AVG: 0.301, R: 98, OBP: 0.392, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
  },
];

// Base columns 
const BASE_COLUMNS = [
  { key: "name", label: "PLAYER", sortable: true },
  { key: "team", label: "TEAM", sortable: true },
  { key: "pos", label: "POS", sortable: true },
  { key: "age", label: "AGE", sortable: true },
];

// Hitting columns
const HITTING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "HR", label: "HR", sortable: true, stat: "HR" },
  { key: "RBI", label: "RBI", sortable: true, stat: "RBI" },
  { key: "SB", label: "SB", sortable: true, stat: "SB" },
  { key: "R", label: "R", sortable: true, stat: "R" },
  { key: "AVG", label: "AVG", sortable: true, stat: "AVG", format: "avg" },
  { key: "OBP", label: "OBP", sortable: true, stat: "OBP", format: "avg" },
];

// Pitching columns
const PITCHING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "W", label: "W", sortable: true, stat: "W" },
  { key: "SV", label: "SV", sortable: true, stat: "SV" },
  { key: "K", label: "K", sortable: true, stat: "K" },
  { key: "ERA", label: "ERA", sortable: true, stat: "ERA", format: "era" },
  { key: "WHIP", label: "WHIP", sortable: true, stat: "WHIP", format: "whip" },
];

// Formatting methods

export default function PlayerInformation(){
  // MLB- like tabs
  const [mode, setMode] = useState("hitting") // hitting | pitching

  // filters
  const [nameQuery, setNameQuery] = useState("");
  const [teamQuery, setTeamQuery] = useState("");
  const [posQuery, setPosQuery] = useState("");

  // sorting
  const [sortKey, setSortKey] = useState("name")
  const [sortDir, setSortDir] = useState("asc")

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const columns = useMemo(
      () => (mode === "hitting" ? HITTING_COLUMNS : PITCHING_COLUMNS),
      [mode]
  );

  
}