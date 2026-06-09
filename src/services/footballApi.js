const BASE_URL = "/api";

const headers = {
  "X-Auth-Token": import.meta.env.VITE_API_KEY,
};

async function apiFetch(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

// Equipos de una competición
export const getTeamsByCompetition = (competitionCode) =>
  apiFetch(`/competitions/${competitionCode}/teams`);

// Detalle de un equipo
export const getTeamById = (teamId) => apiFetch(`/teams/${teamId}`);

// Partidos de una competición
export const getMatchesByCompetition = (competitionCode, limit) =>
  apiFetch(`/competitions/${competitionCode}/matches${limit ? `?limit=${limit}` : ""}`);

// Partidos recientes de un equipo
export const getMatchesByTeam = (teamId) =>
  apiFetch(`/teams/${teamId}/matches?status=FINISHED&limit=10`);

// Clasificación de una competición
export const getStandingsByCompetition = (competitionCode) =>
  apiFetch(`/competitions/${competitionCode}/standings`);
