import styles from "../../styles/components/Playerlist.module.css";

export default function PlayerList({ squad }) {
  if (!squad || squad.length === 0) {
    return <p>No players available.</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SQUAD</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {squad.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>
                  <span className={styles.positionBadge}>
                    {player.position ?? "—"}
                  </span>
                </td>
                <td>{player.nationality ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
