import styles from "./Button.module.css";

export default function Button({children, fullWidth}) {
    return ( 
        <button className={`${styles.btn} ${fullWidth && styles.fullWidth}`}>
            {children}
        </button>
     );
}