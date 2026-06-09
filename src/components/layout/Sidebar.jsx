import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../styles/components/Sidebar.module.css";

const COMPETITIONS = [
  { code: "PL", name: "Premier League", icon: "gb-eng" },
  { code: "PD", name: "La Liga", icon: "es" },
  { code: "BL1", name: "Bundesliga", icon: "de" },
  { code: "SA", name: "Serie A", icon: "it" },
  { code: "FL1", name: "Ligue 1", icon: "fr" },
  { code: "PPL", name: "Primeira Liga", icon: "pt" },
  { code: "DED", name: "Eredivise", icon: "nl" },
  { code: "ELC", name: "Championship", icon: "gb-eng" },
  { code: "BSA", name: "Brasileirao Série A", icon: "br" },
  { code: "CL", name: "UEFA Champions League", icon: "🏆" },
  { code: "WC", name: "FIFA World Cup", icon: "🏆" },
  { code: "EC", name: "EURO", icon: "🏆" },
];

export default function Sidebar({ selected, onSelect }) {
  const navigate = useNavigate();

  const handleCompetitionSelect = (code) => {
    onSelect(code);
    navigate("/");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.divider} />
      <p className={styles.title}>Competitions</p>
      <ul className={styles.list}>
        {COMPETITIONS.map((c) => (
          <li key={c.code}>
            <button
              className={`${styles.item} ${selected === c.code ? styles.active : ""}`}
              onClick={() => handleCompetitionSelect(c.code)}
            >
              <span className={styles.itemIcon}>
                {c.icon === "🏆" ? (
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                ) : (
                  <img
                    src={`https://flagcdn.com/24x18/${c.icon}.png`}
                    alt={c.name}
                    style={{
                      width: 24,
                      height: 18,
                      verticalAlign: "middle",
                      borderRadius: 2,
                    }}
                  />
                )}
              </span>
              {c.name}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.divider} />
      <p className={styles.title}>Navegation</p>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/matches"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.itemIcon}>📅</span>
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <span className={styles.itemIcon}>★</span>
            Favorites
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
