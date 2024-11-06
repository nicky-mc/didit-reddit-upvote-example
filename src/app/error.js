

import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-error mb-4">Naughty Naughty you probably should log in</h1>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}