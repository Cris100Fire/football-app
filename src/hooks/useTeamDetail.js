import { useState, useEffect } from "react";
import { getTeamById } from "../services/footballApi";

export function useTeamDetail(teamId) {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!teamId) return;

    setLoading(true);
    setError(null);

    getTeamById(teamId)
      .then((data) => {
        setTeam(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [teamId]);

  return { team, loading, error };
}
