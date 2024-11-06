import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db";

const options = {
  adapter: PostgresAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  trustHost: true,
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
};

const { auth, handlers, signOut, signIn } = NextAuth(options);

export { auth, handlers, signOut, signIn };