
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Mail, Code, Shield, Sparkles, Terminal } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function AboutClient() {
  return (
    <main className="min-h-screen overflow-hidden px-4 pt-32 pb-20">
      <BackgroundGradient />

      <div className="container mx-auto max-w-4xl">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Developer, Reseller & Law Scholar
          </span>

          <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="animate-text-shimmer">Hassan Amjad</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            An 18-year-old developer, entrepreneur, and law student born and raised in Lahore, Pakistan. I bridge the gap between complex legal studies and advanced digital automation.
          </p>
        </motion.div>

        {/* Bio Cards Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Card 1: Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Legal Studies</h3>
            <p className="leading-relaxed text-gray-600">
              I am currently pursuing my <strong>LLB</strong> at <strong>Superior University</strong> in Lahore. Exploring criminal law, torts, and legal frameworks keeps my analytical thinking sharp, giving me a unique perspective on digital compliance and structure.
            </p>
          </motion.div>

          {/* Card 2: Coding & Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Discord & Development</h3>
            <p className="leading-relaxed text-gray-600">
              Tech is my passion. I mainly specialize in <strong>Discord bot development</strong> (using Python), crafting powerful tools with crypto wallet integrations, live embeds, and automated systems. 
            </p>
          </motion.div>
        </div>

        {/* Entrepreneurship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-16 overflow-hidden rounded-3xl bg-black px-8 py-12 text-center text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="mb-3 text-2xl font-bold">Digital Entrepreneurship</h3>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
              Son of <strong>Amjad Waheed</strong>, I&apos;ve built an active online presence as a reseller on Discord, managing high-volume digital item trading, utility services, and automated transactions. PagePuff is an extension of my drive to build fast, reliable, privacy-first web utilities.
            </p>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-bold">Let&apos;s Connect</h3>
          <div className="flex justify-center gap-4">
            <Link
              href="mailto:hassanamjad3@hotmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
