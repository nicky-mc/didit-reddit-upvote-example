import { Inter } from "next/font/google";
import { UserInfo } from "../components/UserInfo";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/Providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Didit",
  description: "A social app like Reddit or Hacker News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} bg-base-100`}>
        <Providers>
          <header className="navbar bg-base-300 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
              {/* Left Section */}
              <div className="flex items-center space-x-4">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                  Didit
                </Link>
                <Link
                  href="/add-post"
                  className="btn btn-secondary btn-sm text-lg"
                >
                  Add Post
                </Link>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <UserInfo />
              </div>
            </div>
          </header>
          <main className="container mx-auto p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
