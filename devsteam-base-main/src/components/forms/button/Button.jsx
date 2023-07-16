import styles from "./Button.module.css";

export default function Button({ children, fullWidth, ...props }) {
  return (
    <button
      className={`${styles.btn} ${fullWidth && styles.fullWidth}`}
      {...props}
    >
      {children}
    </button>
  );
}
