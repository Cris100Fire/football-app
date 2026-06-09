import styles from "../../styles/components/Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading">
      <div className={styles.spinner} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
