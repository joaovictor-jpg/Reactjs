import style from "./Post.module.css";

export default function Post({post}) {
    return (
        <div className={style.post}>
            <img className={style.capa} src={`/assets/posts/${post.id}/capa.png`} />
            <h2 className={style.titulo}>{post.titulo}</h2>
            <button className={style.botaoLer}>Ler</button>
        </div>
    );
};