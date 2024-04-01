import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  console.log("session", session);
  return (
    <>
      {session ? (
        <>
          <div>
            <h1 className="text-center">Home Page</h1>
            <h2>Hi, {session?.user}</h2>
            <div className="flex justify-center">
              <Link className="text-blue-700 underline" href="/posts">
                All Posts
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <p>
            <Link href="/api/auth/signin">Sign in</Link>
          </p>
        </>
      )}
    </>
  );
}
