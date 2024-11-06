import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db"; // Ensure this points to your db setup

const authOptions = {
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
};

// Export handlers for Next.js API routes
export const handlers = NextAuth(authOptions);
