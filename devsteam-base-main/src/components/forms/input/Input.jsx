import styles from "./Input.module.css";

export default function Input({ fullWidth, ...props }) {
  return (
    <div className={styles.search}>
      <input
        className={`${styles.input} ${fullWidth && styles.fullWidth}`}
        {...props}
      />
    </div>
  );
}
