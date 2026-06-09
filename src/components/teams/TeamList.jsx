import TeamCard from "./TeamCard";
import styles from "../../styles/components/Teamlist.module.css";

export default function TeamList({ teams }) {
  if (teams.length === 0) {
    return <p className={styles.empty}>No team was found.</p>;
  }

  return (
    <div className={styles.grid}>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
