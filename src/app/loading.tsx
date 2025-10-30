"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative">
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-orange-600 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 h-16 w-16 rounded-full border-4 border-purple-600 border-t-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
