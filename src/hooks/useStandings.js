import { useState, useEffect } from "react";
import { getStandingsByCompetition } from "../services/footballApi";

export function useStandings(competitionCode = "PL") {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getStandingsByCompetition(competitionCode)
      .then((data) => {
        setStandings(data.standings || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [competitionCode]);

  return { standings, loading, error };
}
