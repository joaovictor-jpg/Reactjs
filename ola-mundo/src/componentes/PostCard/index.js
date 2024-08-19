import { Link } from "react-router-dom";
import style from "./Post.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={style.post}>
                <img className={style.capa} src={`/assets/posts/${post.id}/capa.png`} />
                <h2 className={style.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
    );
};