import styles from "./Input.module.css";

export default function Input({ fullWidth, ...props }) {
  return (
    <div>
      <input
        className={`${styles.input} ${fullWidth && styles.fullWidth}`}
        {...props}
      />
    </div>
  );
}
