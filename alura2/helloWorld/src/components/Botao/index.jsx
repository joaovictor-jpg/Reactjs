import styles from './Botao.module.css'

export const Botao = ({children}) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    )
}