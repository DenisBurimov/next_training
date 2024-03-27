import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  return res;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
export default async function AllPosts() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1 className="text-center">All posts</h1>
      <div className="flex justify-center">
        <Link className="text-blue-700 underline" href="/">Home Page</Link>
        <Link className="text-blue-700 underline" href="/form">Login</Link>
      </div>

      {posts.map((post: Post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}

    </div>

  );
}
