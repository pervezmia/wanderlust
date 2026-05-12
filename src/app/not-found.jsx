import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-xl">Oops! Page not found.</p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-white px-5 py-3 text-black transition hover:bg-gray-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
