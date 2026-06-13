"use client"

import { useRouter } from "next/navigation";

const ErrorPage = ({ error, reset }) => {
    const router = useRouter();

    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 text-center">

            {/* Background blobs */}
            <div className="absolute w-72 h-72 rounded-full bg-red-500 opacity-5 -top-20 -left-16 pointer-events-none" />
            <div className="absolute w-52 h-52 rounded-full bg-blue-500 opacity-5 -bottom-10 -right-10 pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-medium px-3 py-1.5 rounded-md mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4m0 4h.01M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/></svg>
                Runtime error
            </div>

            {/* Big number */}
            <h1 className="text-8xl font-medium tracking-tighter leading-none text-gray-900 dark:text-white mb-3">
                5<span className="opacity-20">0</span>0
            </h1>

            <h2 className="text-xl font-medium text-gray-900 dark:text-white mt-3 mb-2">
                Something went wrong
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed mb-8">
                {error?.message || "We couldn't load the data. The server might be unreachable or a configuration is missing."}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
                <button
                    onClick={reset}
                    className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>
                    Try again
                </button>
                <button
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/></svg>
                    Go home
                </button>
            </div>

            {/* Hint */}
            <div className="mt-10 w-10 h-px bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
            <p className="text-xs text-gray-400 dark:text-gray-600">
                Check that{" "}
                <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_SERVER_URL</code>{" "}
                is set in{" "}
                <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">.env.local</code>
            </p>
        </div>
    );
};

export default ErrorPage;