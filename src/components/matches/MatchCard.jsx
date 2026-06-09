import { Link } from "react-router-dom";
import styles from "../../styles/components/Matchcard.module.css";

export default function MatchCard({ match }) {
  const { homeTeam, awayTeam, score, utcDate, competition, status } = match;
  const fecha = new Date(utcDate).toLocaleDateString("en-EN");
  const golesLocal = score?.fullTime?.home ?? "—";
  const golesVisitante = score?.fullTime?.away ?? "—";
  const isLive = status === "IN_PLAY" || status === "PAUSED";

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.competition}>{competition?.name}</span>
        <span className={styles.date}>{fecha}</span>
      </div>

      <div className={styles.teams}>
        <Link to={`/team/${homeTeam.id}`} className={styles.team}>
          <img
            src={homeTeam.crest}
            alt={homeTeam.name}
            className={styles.teamCrest}
          />
          <span className={styles.teamName}>{homeTeam.name}</span>
        </Link>

        <div className={styles.scoreBox}>
          <span className={styles.score}>
            {golesLocal} - {golesVisitante}
          </span>
          <span
            className={`${styles.status} ${isLive ? styles.statusLive : ""}`}
          >
            {isLive ? "● LIVE" : status === "FINISHED" ? "FINAL" : "Scheduled"}
          </span>
        </div>

        <Link to={`/team/${awayTeam.id}`} className={styles.team}>
          <img
            src={awayTeam.crest}
            alt={awayTeam.name}
            className={styles.teamCrest}
          />
          <span className={styles.teamName}>{awayTeam.name}</span>
        </Link>
      </div>
    </div>
  );
}
