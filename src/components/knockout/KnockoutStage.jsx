import MatchCard from "../matches/MatchCard";
import styles from "../../styles/components/Knockoutstage.module.css";

export default function KnockoutStage({ stages }) {
  if (!stages.length) return null;

  return (
    <div className={styles.container}>
      {stages.map(({ stage, label, matches }) => (
        <section key={stage} className={styles.stage}>
          <h3 className={styles.stageTitle}>{label}</h3>
          <div className={styles.matches}>
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
