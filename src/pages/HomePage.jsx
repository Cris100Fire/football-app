import { useState } from "react";
import { useTeams } from "../hooks/useTeams";
import { useStandings } from "../hooks/useStandings";
import { useKnockout } from "../hooks/useKnockout";
import styles from "../styles/pages/Homepage.module.css";
import TeamList from "../components/teams/TeamList";
import StandingsTable from "../components/standings/StandingsTable";
import KnockoutStage from "../components/knockout/KnockoutStage";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

export default function HomePage({ competition }) {
  const [tab, setTab] = useState("teams");
  const {
    teams,
    loading: loadingTeams,
    error: errorTeams,
    search,
    setSearch,
  } = useTeams(competition);
  const {
    standings,
    loading: loadingStandings,
    error: errorStandings,
  } = useStandings(competition);
  const {
    stages,
    loading: loadingKnockout,
    error: errorKnockout,
  } = useKnockout(competition);

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <h1 className={styles.heading}>Teams</h1>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search Team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          {search && (
            <button
              className={styles.searchClear}
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {search && (
        <p className={styles.meta}>
          <span>{teams.length}</span> results(s) to "{search}"
        </p>
      )}

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "teams" ? styles.tabActive : ""}`}
          onClick={() => setTab("teams")}
        >
          Teams
        </button>
        <button
          className={`${styles.tab} ${tab === "table" ? styles.tabActive : ""}`}
          onClick={() => setTab("table")}
        >
          Clasification
        </button>
        {stages.length > 0 && (
          <button
            className={`${styles.tab} ${tab === "knockout" ? styles.tabActive : ""}`}
            onClick={() => setTab("knockout")}
          >
            Knockouts
          </button>
        )}
      </div>

      <div className={styles.content}>
        {tab === "teams" && (
          <>
            {loadingTeams && <Spinner />}
            {errorTeams && <ErrorMessage message={errorTeams} />}
            {!loadingTeams && !errorTeams && <TeamList teams={teams} />}
          </>
        )}

        {tab === "table" && (
          <>
            {loadingStandings && <Spinner />}
            {errorStandings && <ErrorMessage message={errorStandings} />}
            {!loadingStandings && !errorStandings && (
              <StandingsTable groups={standings} />
            )}
          </>
        )}

        {tab === "knockout" && (
          <>
            {loadingKnockout && <Spinner />}
            {errorKnockout && <ErrorMessage message={errorKnockout} />}
            {!loadingKnockout && !errorKnockout && (
              <KnockoutStage stages={stages} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
