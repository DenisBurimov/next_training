import Link from "next/link";

interface PostDetailsProps {
  params: {
    postId: string;
  };
}

export default function PostDetails({params}: PostDetailsProps) {
  return (
    <div className="">
        <h1 className="">Post Details</h1>
        <p className="">{params.postId}</p>
        <div className="flex flex-col">
        <Link className="text-blue-700 underline" href="/">Home Page</Link>
        <Link className="text-blue-700 underline" href="/posts">All Posts</Link>
        </div>
    </div>
  );
}