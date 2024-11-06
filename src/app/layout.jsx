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
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">
                Didit
              </Link>
            </div>
            <div className="flex-none">
              <Link
                href="/add-post"
                className="btn btn-primary mr-4"
              >
                Add Post
              </Link>
              <UserInfo />
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
