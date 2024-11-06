import { Inter } from "next/font/google";
import { UserInfo } from "../components/UserInfo";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/Providers";
import Head from "next/head";
import { useSession } from "next-auth/react"; // Assuming you're using NextAuth for user sessions

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Didit",
  description: "A social app like Reddit or Hacker News",
};

export default function RootLayout({ children }) {
  const { data: session } = useSession(); // Get the session data

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Providers>
          <header className="border-b border-gray-300 p-4 flex items-center shadow-md sticky top-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white backdrop-blur-md z-50">
            <Link href="/" className="text-2xl font-bold hover:underline">
              Didit
            </Link>
            <Link
              href="/add-post"
              className="ml-10 bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-opacity-90 shadow-md"
            >
              Add Post
            </Link>
            <Link
              href="/explore"
              className="ml-4 bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-opacity-90 shadow-md"
            >
              Explore
            </Link>

            {session?.user && (
              <Link
                href={`/profile/${session.user.id}`}
                className="ml-4 bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-opacity-90 shadow-md"
              >
                My Profile
              </Link>
            )}

            <div className="ml-auto">
              <UserInfo />
            </div>
          </header>
          <main className="max-w-screen-xl lg:mx-auto bg-gray-100 p-6 rounded-lg shadow-sm">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
