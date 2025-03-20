import styles from './PostModelo.module.css'

export const PostModelos = ({children, fotoCapa, titulo}) => {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.foto} style={{backgroundImage: `url(${fotoCapa})`}}></div>
            <h2 className={styles.titulo}>{titulo}</h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}