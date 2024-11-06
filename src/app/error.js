"use client";

import Link from "next/link";

export default function GlobalError ( { reset } ) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-error mb-4">Naughty Naughty you probably should log in</h1>
        <button onClick={() => reset()} className="btn btn-primary">
          Try again
        </button>
      </div>
    </div>
  );
}