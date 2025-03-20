import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import styles from './Home.module.css';


const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => { fetch('https://api.github.com/users/joaovictor-jpg/repos').then(result => result.json()).then(data => setPosts(data)) }, [])

    return (
        <ul className={styles.posts}>
            {
                posts.length > 0 ? posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                )) : (
                    <h1>Sem posts</h1>
                )
            }
        </ul>
    )
}

export default Home