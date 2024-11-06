"use client";
import Image from "next/image";

export default function GlobalError({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="text-center flex flex-col items-center">
        <Image
          src="/naughty.jpg"
          alt="Naughty Warning"
          width={300}
          height={300}
          className="rounded-full mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-error mb-4">
          Naughty Naughty! You probably should log in.
        </h1>
        {error && (
          <p className="text-lg text-gray-500 mb-4">
            {error.message
              ? `${error.message} - this was not the error you were looking for.`
              : "This was not the error you were looking for."}
          </p>
        )}
        <button onClick={() => reset()} className="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}
