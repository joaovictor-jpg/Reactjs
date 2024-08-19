import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{backgroundImage: `url(${FotoCapa})`}}></div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.PostContainer}>{children}</div>
        </article>
    );
};