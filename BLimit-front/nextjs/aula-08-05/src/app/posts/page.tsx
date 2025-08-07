type PostProps = {
    id: string;
    title: string;
    body: string;
}


export default async function Post() {
    const post: PostProps = await getPost();
    return (
        <div>
            <h1>{post.id}</h1>
            <h3>{post.title}</h3>
            <span>{post.body}</span>
        </div>
    )
}


export async function getPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }

    const data: PostProps = await res.json();

    return data;
}