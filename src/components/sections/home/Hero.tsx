"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  FileText,
  Merge,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.98]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.99]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative overflow-hidden px-4 pt-14 pb-10 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0" />

        <div className="animate-float-slow absolute -left-20 top-20 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />

        <div className="animate-float absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-gray-50 blur-3xl" />
      </div>

      {/* Floating Icons - Desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[15%] top-24 hidden lg:block"
      >
        <div className="animate-float flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl">
          <FileText className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute right-[12%] top-36 hidden lg:block"
      >
        <div className="animate-float-slow bg-primary flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-xl">
          <Merge className="h-10 w-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-10 left-[20%] hidden lg:block"
      >
        <div className="animate-float flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 shadow-lg">
          <ImageIcon className="h-7 w-7" />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium sm:mb-6 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            100% Free & Privacy First
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Every PDF Tool
          <br />
          <span className="animate-text-shimmer">
            You&apos;ll Ever Need
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mb-8 sm:text-base md:text-lg"
        >
          Merge, split, compress, convert — do everything with your PDFs.
          All processing happens in your browser. Your files never leave
          your device.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/merge-pdf"
            className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base sm:px-10 sm:py-4 sm:text-lg"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#tools"
            className="btn-secondary inline-flex items-center justify-center px-8 py-3.5 text-base sm:px-10 sm:py-4 sm:text-lg"
          >
            Explore Tools
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
