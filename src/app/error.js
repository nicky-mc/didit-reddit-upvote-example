"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-error mb-4">Naughty Naughty you probably should log in</h1>
        <Link href="/">
          <button className="btn btn-primary">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}