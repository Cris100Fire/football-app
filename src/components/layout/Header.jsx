import { NavLink } from "react-router-dom";
import styles from "../../styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        ⚽ <span>FootballApp</span>
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Teams
        </NavLink>
        <NavLink
          to="/matches"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Matches
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
