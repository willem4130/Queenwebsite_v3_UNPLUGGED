"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <motion.div
        className="max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-white">
          Something went wrong!
        </h2>
        <p className="mb-8 text-gray-400">
          We encountered an unexpected error. Please try again or contact
          support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
}
