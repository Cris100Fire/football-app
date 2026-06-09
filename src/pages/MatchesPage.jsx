import { useState } from "react";
import { useMatches } from "../hooks/useMatches";
import styles from "../styles/pages/Matchespage.module.css";
import MatchList from "../components/matches/MatchList";
import Sidebar from "../components/layout/Sidebar";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

export default function MatchesPage({ competition }) {
  const { matches, loading, error, hayMas, loadMore } = useMatches(competition);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Matches</h1>

      <div className={styles.content}>
        <div>
          {loading && <Spinner />}
          {error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <MatchList
              matches={matches}
              hayMas={hayMas}
              loadMore={loadMore}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
