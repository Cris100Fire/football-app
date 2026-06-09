import { useState, useEffect } from "react";
import { getTeamsByCompetition } from "../services/footballApi";

export function useTeams(competitionCode = "PL") {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    getTeamsByCompetition(competitionCode)
      .then((data) => {
        setTeams(data.teams);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [competitionCode]);

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase()),
  );

  return { teams: filteredTeams, loading, error, search, setSearch };
}
