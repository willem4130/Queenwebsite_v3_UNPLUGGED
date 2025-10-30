"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fading out after 2 seconds (faster for better UX)
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Call onComplete after fade completes (2.5 seconds total)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{
            willChange: "opacity",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: [1, 1, 1.6] }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
              scale: {
                duration: 1.6,
                times: [0, 0.25, 1],
                ease: "easeOut",
              },
            }}
            className="relative w-full max-w-[80vw] px-8 md:max-w-[500px]"
            style={{
              willChange: "opacity, transform",
            }}
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/logo/splash-logo-mobile.webp"
                type="image/webp"
              />
              <source srcSet="/logo/splash-logo.webp" type="image/webp" />
              <Image
                src="/logo/splash-logo.png"
                alt="The Dutch Queen Logo"
                width={568}
                height={800}
                priority
                quality={95}
                className="h-auto w-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                sizes="(max-width: 768px) 90vw, 600px"
              />
            </picture>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
