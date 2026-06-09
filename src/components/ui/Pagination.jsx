import styles from "../../styles/components/Pagination.module.css";

export default function Pagination({ hayMas, loadMore, loading }) {
  if (!hayMas) return null;

  return (
    <div className={styles.wrapper}>
      <button onClick={loadMore} disabled={loading} className={styles.btn}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
