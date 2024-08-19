import Banner from "componentes/Banner";
import style from "./inicio.module.css";
import posts from "json/posts.json";
import Post from "componentes/Post";

export default function Inicio() {
    return (
        <ul className={style.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    );
};