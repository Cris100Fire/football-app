import FavoritesList from "../components/favorites/FavoritesList";
import styles from "../styles/pages/Favoritespage.module.css";
import { useFavoritesContext } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavoritesContext();

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <h1 className={styles.heading}>
          My <span>Favorites</span>
        </h1>
        <p className={styles.count}>{favorites.length} team(s) saved</p>
      </div>
      <FavoritesList />
    </div>
  );
}
