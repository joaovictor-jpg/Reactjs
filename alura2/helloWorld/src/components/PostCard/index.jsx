import styles from './Post.module.css'
import capa from '../../assets/capa.png'
import { Link } from 'react-router-dom'
import { Botao } from '../Botao'

export const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.name}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={capa} alt="Capa do post" />
                {post.description && post.description.trim().length > 3 && (
                    <h2 className={styles.titulo}>{post.description}</h2>
                )}
                <Botao>Ler</Botao>
            </div>
        </Link>
    )
}