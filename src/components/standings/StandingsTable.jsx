import { Link } from "react-router-dom";
import styles from "../../styles/components/Standingstable.module.css";

export default function StandingsTable({ standings, groups }) {
  const data = groups || (standings ? [{ group: null, table: standings }] : []);

  if (!data.length) return <p className={styles.empty}>No tables available.</p>;

  return (
    <>
      {data.map((g) => (
        <div key={g.group || "standings"} className={styles.group}>
          {g.group && (
            <h3 className={styles.groupTitle}>
              {g.group.replace("GROUP_", "")}
            </h3>
          )}
          <div className={styles.wrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Equipo</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>E</th>
                  <th>P</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th className={styles.pts}>Pts</th>
                </tr>
              </thead>
              <tbody>
                {g.table.map((row) => (
                  <tr key={row.team.id}>
                    <td className={styles.position}>{row.position}</td>
                    <td>
                      <Link
                        to={`/team/${row.team.id}`}
                        className={styles.teamCell}
                      >
                        <img
                          src={row.team.crest}
                          alt={row.team.name}
                          className={styles.crest}
                        />
                        <span>{row.team.name}</span>
                      </Link>
                    </td>
                    <td>{row.playedGames}</td>
                    <td>{row.won}</td>
                    <td>{row.draw}</td>
                    <td>{row.lost}</td>
                    <td>{row.goalsFor}</td>
                    <td>{row.goalsAgainst}</td>
                    <td>{row.goalDifference}</td>
                    <td className={styles.pts}>{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}
