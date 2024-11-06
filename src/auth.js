import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db";

export const { auth, handlers, signOut, signIn } = NextAuth({
  adapter: PostgresAdapter(db),
  providers: [GitHub],
  trustHost: true,
  callbacks: {
  session: async ({ session, token }) => {
    session.user.id = token.id;
    return session;
  },
},
cookies: {
  sessionToken: {
    name: `__Secure-next-auth.session-token`,
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
    },
  },
},
});
