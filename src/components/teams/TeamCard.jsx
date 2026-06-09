import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../context/FavoritesContext";
import styles from "../../styles/components/Teamcard.module.css";

export default function TeamCard({ team }) {
  const { toggle, isFavorite } = useFavoritesContext();
  const fav = isFavorite(team.id);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.crestWrapper}>
          <img src={team.crest} alt={team.name} className={styles.crest} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{team.name}</h3>
          <p className={styles.country}>{team.area?.name}</p>
        </div>
        <button
          className={`${styles.favBtn} ${fav ? styles.active : ""}`}
          onClick={() =>
            toggle({ id: team.id, name: team.name, crest: team.crest })
          }
          aria-label={fav ? "Delete favorite" : "Add favorite"}
        >
          {fav ? "★" : "☆"}
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Founded</span>
          <span className={styles.statValue}>{team.founded ?? "—"}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Country</span>
          <span className={styles.statValue}>
            {team.area?.name?.slice(0, 3).toUpperCase() ?? "—"}
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Players</span>
          <span className={styles.statValue}>{team.squad?.length ?? "—"}</span>
        </div>
      </div>

      <Link to={`/team/${team.id}`} className={styles.detailLink}>
        See detail →
      </Link>
    </div>
  );
}
