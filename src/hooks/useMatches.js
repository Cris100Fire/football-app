import { useState, useEffect } from "react";
import { getMatchesByCompetition } from "../services/footballApi";

export function useMatches(competitionCode = "PL") {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPage(1);

    getMatchesByCompetition(competitionCode)
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [competitionCode]);

  const matchesPaginados = matches.slice(0, page * PAGE_SIZE);
  const hayMas = matchesPaginados.length < matches.length;

  function loadMore() {
    setPage((currentPage) => currentPage + 1);
  }

  return { matches: matchesPaginados, loading, error, hayMas, loadMore };
}
