import styles from './Subtitle.module.css';

export default function Subtitle({subtitle}) {
    return ( 
        <h2 className={styles.subtitle}>{subtitle}</h2>
     );
}