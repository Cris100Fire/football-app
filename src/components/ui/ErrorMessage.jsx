import styles from "../../styles/components/Errormessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div role="alert" className={styles.container}>
      <p className={styles.text}>
        <span className={styles.icon}>⚠️</span>{" "}
        {message || "Ocurrió un error inesperado."}
      </p>
    </div>
  );
}
