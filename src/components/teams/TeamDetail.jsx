import { Link } from "react-router-dom";
import PlayerList from "../players/PlayerList";
import styles from "../../styles/components/Teamdetail.module.css";

export default function TeamDetail({ team }) {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>

      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.crestWrapper}>
            <img src={team.crest} alt={team.name} className={styles.crest} />
          </div>
          <div>
            <h1 className={styles.name}>{team.name}</h1>
            <p className={styles.country}>{team.area?.name}</p>
          </div>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Stadium</span>
            <span className={styles.statValue}>{team.venue ?? "—"}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Founded</span>
            <span className={styles.statValue}>{team.founded ?? "—"}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Players</span>
            <span className={styles.statValue}>
              {team.squad?.length ?? "—"}
            </span>
          </div>
        </div>
      </div>

      <PlayerList squad={team.squad || []} />
    </div>
  );
}
