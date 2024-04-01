"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { HeaderNavBar } from "./nav-links";

const Header = () => {
  console.log("console.log Header");
  const { data: session } = useSession();
  return (
    <header className="py-4 px-8 flex justify-between text-white">
      <HeaderNavBar />
      <div>
        {session ? (
          <button
            className="py-2 px-4 border border-neutral-500 rounded-xl hover:border-white transition-colors duration-200"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="py-2 px-4 border border-neutral-500 rounded-xl hover:border-white transition-colors duration-200"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
