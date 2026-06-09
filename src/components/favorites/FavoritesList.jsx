import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../context/FavoritesContext";
import styles from "../../styles/components/Favoriteslist.module.css";

export default function FavoritesList() {
  const { favorites, toggle } = useFavoritesContext();

  if (favorites.length === 0) {
    return (
      <p className={styles.empty}>You don't have any saved favorites yet.</p>
    );
  }

  return (
    <ul className={styles.list}>
      {favorites.map((team) => (
        <li key={team.id} className={styles.item}>
          <div className={styles.crestWrapper}>
            <img src={team.crest} alt={team.name} className={styles.crest} />
          </div>
          <Link to={`/team/${team.id}`} className={styles.name}>
            {team.name}
          </Link>
          <button className={styles.removeBtn} onClick={() => toggle(team)}>
            ✕ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
