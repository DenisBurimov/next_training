"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  console.log("console.log Header");
  const { data: session } = useSession();
  return (
    <header className="m-3 p-2 flex justify-center bg-gray-700 text-white">
      <p className="text-2xl font-semibold">Header</p>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </header>
  );
};

export default Header;
