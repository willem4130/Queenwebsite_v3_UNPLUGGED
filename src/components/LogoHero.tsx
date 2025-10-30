"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { heroConfig, type HeroAnimation } from "../../config/hero.config";

interface LogoHeroProps {
  className?: string;
}

export function LogoHero({ className = "" }: LogoHeroProps) {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  const scale = heroConfig.logo.scale[breakpoint];
  const scaledWidth = heroConfig.logo.width * scale;
  const scaledHeight = heroConfig.logo.height * scale;

  const getAnimationVariants = (animation: HeroAnimation) => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 2, ease: [0.4, 0, 0.2, 1] },
        };

      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8, rotate: -5 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          transition: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
        };

      case "glow":
        return {
          initial: {
            opacity: 0,
            scale: 0.9,
            filter: "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: [
              "drop-shadow(0 0 40px rgba(251, 191, 36, 0.6))",
              "drop-shadow(0 0 60px rgba(251, 191, 36, 0.8))",
              "drop-shadow(0 0 40px rgba(251, 191, 36, 0.6))",
            ],
          },
          transition: {
            duration: 2.5,
            filter: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };

      case "glitch":
        return {
          initial: { opacity: 0, x: 0, y: 0 },
          animate: {
            opacity: [0, 1, 1, 1, 1, 1],
            x: [0, -5, 5, -2, 2, 0],
            y: [0, 2, -2, 1, -1, 0],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(5deg)",
              "hue-rotate(-5deg)",
              "hue-rotate(0deg)",
            ],
          },
          transition: {
            duration: 0.6,
            delay: 0.5,
            times: [0, 0.1, 0.2, 0.4, 0.6, 1],
            ease: [0.4, 0, 0.2, 1],
          },
        };

      case "none":
      default:
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          transition: { duration: 0 },
        };
    }
  };

  const variants = getAnimationVariants(heroConfig.logo.animation);

  const positionClasses = {
    center: "items-center justify-center",
    top: "items-start pt-20",
    bottom: "items-end pb-20",
  };

  return (
    <div
      className={`flex h-full w-full ${positionClasses[heroConfig.logo.position]} ${className}`}
      style={{ marginLeft: "calc(-17vw + 90px)", marginTop: "200px" }}
    >
      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        transition={variants.transition as any}
        className="relative"
        style={{
          width: scaledWidth,
          height: scaledHeight,
        }}
      >
        <Image
          src={heroConfig.logo.src}
          alt="The Dutch Queen Logo"
          width={heroConfig.logo.width}
          height={heroConfig.logo.height}
          priority
          className="h-auto w-full"
          style={{
            width: "auto",
            height: "auto",
            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.9))",
            transform: "scale(1.5)",
            transformOrigin: "center center",
          }}
        />
      </motion.div>
    </div>
  );
}
