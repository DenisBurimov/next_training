import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <div className="flex justify-center">
        <Link className="text-blue-700 underline" href="/posts">All Posts</Link>

      </div>
    </div>
  );
}
