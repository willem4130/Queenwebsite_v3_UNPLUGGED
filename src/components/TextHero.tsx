"use client";

import { motion } from "framer-motion";
import { useBandContent } from "@/hooks/useConfig";

interface TextHeroProps {
  className?: string;
}

export function TextHero({ className = "" }: TextHeroProps) {
  const content = useBandContent();

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
          scale: { duration: 1.2, ease: "easeInOut" },
        }}
      >
        <motion.h1
          className="mb-8 text-6xl font-bold uppercase tracking-widest text-white md:text-8xl"
          style={{
            textShadow:
              "0 3px 6px rgba(0, 0, 0, 0.95), 0 6px 12px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.8)",
            WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.2)",
          }}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {content.bandName}
        </motion.h1>
        <motion.p
          className="text-lg font-medium uppercase tracking-wider text-white"
          style={{
            textShadow:
              "0 2px 4px rgba(0, 0, 0, 0.95), 0 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)",
            letterSpacing: "0.1em",
          }}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 2.5,
            delay: 2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {content.tagline}
        </motion.p>
      </motion.div>
    </div>
  );
}
