import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface CredentialInput {
  username: string;
  password: string;
}

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
        async authorize(credentials: CredentialInput): Promise<User | null> {
          // Fetch user from database
          // Docs: https://next-auth.js.org/providers/credentials
          const user = {
            id: "1",
            name: "J Smith",
            email: "jsmith@example.com",
            password: "password",
          };

          if (
            credentials?.username === user.name &&
            credentials?.password === user.password
          ) {
            return user;
          } else {
            return null;
          }
        },
      },
    }),
  ],
};
