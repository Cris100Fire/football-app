import MatchCard from "./MatchCard";
import Pagination from "../ui/Pagination";
import styles from "../../styles/components/Matchlist.module.css";

export default function MatchList({ matches, hayMas, loadMore, loading }) {
  if (matches.length === 0) {
    return <p>No matches available.</p>;
  }

  return (
    <div className={styles.list}>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}

      <Pagination hayMas={hayMas} loadMore={loadMore} loading={loading} />
    </div>
  );
}
