import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="text-center text-2xl text-gray-700 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="bg-pink-300 text-black px-4 py-2 rounded">
        Return Home
      </Link>
    </div>
  );
}