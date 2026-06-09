import { useState, useEffect } from "react";
import { getMatchesByCompetition } from "../services/footballApi";

const STAGE_ORDER = [
  "FINAL",
  "THIRD_PLACE",
  "SEMI_FINALS",
  "QUARTER_FINALS",
  "LAST_16",
  "LAST_32",
  "LAST_64",
  "ROUND_4",
  "ROUND_3",
  "ROUND_2",
  "ROUND_1",
  "PLAYOFFS",
  "PLAYOFF_ROUND_2",
  "PLAYOFF_ROUND_1",
  "QUALIFICATION",
  "QUALIFICATION_ROUND_3",
  "QUALIFICATION_ROUND_2",
  "QUALIFICATION_ROUND_1",
  "PRELIMINARY_ROUND",
  "GROUP_STAGE",
  "LEAGUE_STAGE",
  "REGULAR_SEASON",
];

const STAGE_LABELS = {
  FINAL: "Final",
  THIRD_PLACE: "Third Place",
  SEMI_FINALS: "Semi-finals",
  QUARTER_FINALS: "Quarter-finals",
  LAST_16: "Round of 16",
  LAST_32: "Round of 32",
  LAST_64: "Round of 64",
  ROUND_4: "Round 4",
  ROUND_3: "Round 3",
  ROUND_2: "Round 2",
  ROUND_1: "Round 1",
  PLAYOFFS: "Playoffs",
  PLAYOFF_ROUND_2: "Playoff Round 2",
  PLAYOFF_ROUND_1: "Playoff Round 1",
  QUALIFICATION: "Qualification",
  QUALIFICATION_ROUND_3: "Qualification Round 3",
  QUALIFICATION_ROUND_2: "Qualification Round 2",
  QUALIFICATION_ROUND_1: "Qualification Round 1",
  PRELIMINARY_ROUND: "Preliminary Round",
  GROUP_STAGE: "Group Stage",
  LEAGUE_STAGE: "League Stage",
  REGULAR_SEASON: "Regular Season",
};

export function useKnockout(competitionCode = "PL") {
  const [stages, setStages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getMatchesByCompetition(competitionCode, 300)
      .then((data) => {
        const grupos = {};

        for (const match of data.matches) {
          const stage = match.stage;
          if (
            stage === "REGULAR_SEASON" ||
            stage === "GROUP_STAGE"
          )
            continue;

          if (!grupos[stage]) grupos[stage] = [];
          grupos[stage].push(match);
        }

        const ordenado = Object.entries(grupos)
          .sort(([a], [b]) => STAGE_ORDER.indexOf(a) - STAGE_ORDER.indexOf(b))
          .map(([stage, matches]) => ({
            stage,
            label: STAGE_LABELS[stage] || stage,
            matches,
          }));

        setStages(ordenado);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [competitionCode]);

  return { stages, loading, error };
}
