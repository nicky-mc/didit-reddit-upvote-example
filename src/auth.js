import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db";

export const { auth, handlers, signOut, signIn } = NextAuth({
  adapter: PostgresAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  trustHost: true,
  callbacks: {
    session: async ({ session, user }) => {
      if (user?.id) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
