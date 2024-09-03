import styles from './Relogio.module.scss';

interface RelogioPorps {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: RelogioPorps) {

    const minutos = Math.floor(tempo / 60);
    const segundo = tempo % 60;
    const [minutoDezenas, minutosUnidades] = String(minutos).padStart(2, '0');
    const [segundoDezenas, segundoUnidades] = String(segundo).padStart(2, '0');

    return(
        <>
            <span className={styles.relogioNumero}>{minutoDezenas}</span>
            <span className={styles.relogioNumero}>{minutosUnidades}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundoDezenas}</span>
            <span className={styles.relogioNumero}>{segundoUnidades}</span>
        </>
    );
};