"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-8 text-6xl font-thin text-white/20 md:text-8xl">
            404
          </h1>

          <p className="mb-8 uppercase tracking-wider text-white/60">
            Page not found
          </p>

          <Link href="/" className="minimal-button inline-block">
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
