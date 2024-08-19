import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    return (
       <PostModelo
        FotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
       >
        <div className="post.markdwon-container">

        </div>
        <ReactMarkdown>
            {post.texto}
        </ReactMarkdown>
       </PostModelo>
    );
};