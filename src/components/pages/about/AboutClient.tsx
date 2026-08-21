"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Shield, Terminal } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function AboutClient() {
  return (
    <main className="min-h-screen overflow-hidden px-4 pt-32 pb-20">
      <BackgroundGradient />

      <div className="container mx-auto max-w-5xl">
        {/* Hero Section with Photo */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="rounded-5xl absolute -inset-4 -rotate-3 bg-linear-to-br from-gray-200 via-gray-100 to-white" />
              <div className="rounded-5xl absolute -inset-4 rotate-2 bg-linear-to-tr from-gray-100 via-white to-gray-50 opacity-80" />

              <div className="relative overflow-hidden rounded-4xl border-4 border-white shadow-2xl">
                <Image
                  src="/hassan-amjad.jpg"
                  alt="Hassan Amjad"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -right-4 -bottom-4 rounded-2xl bg-black px-5 py-3 text-white shadow-xl"
              >
                <p className="text-sm font-medium">Developer & Law Scholar</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Born & Raised in Lahore
            </span>

            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="animate-text-shimmer">Hassan Amjad</span>
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              I am an 18-year-old developer, entrepreneur, and law student. Born in Lahore and son of <strong>Amjad Waheed</strong>, I bridge the analytical world of law with high-end digital solutions and automation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:hassanamjad3@hotmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bio Cards Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Card 1: Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Legal Studies (LLB)</h3>
            <p className="leading-relaxed text-gray-600">
              I am currently pursuing my <strong>LLB</strong> at <strong>Superior University</strong> in Lahore. Studying criminal law, torts, and legal frameworks keeps my logic sharp, giving me a solid framework for building secure, reliable systems.
            </p>
          </motion.div>

          {/* Card 2: Coding & Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Discord & Bot Development</h3>
            <p className="leading-relaxed text-gray-600">
              Tech is my core playground. I specialize in <strong>Discord bot development</strong> using Python, building custom automated tools, command loggers, and crypto utility features.
            </p>
          </motion.div>
        </div>

        {/* Entrepreneurship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
            <h3 className="mb-3 text-2xl font-bold">Digital Entrepreneurship & Reselling</h3>
            <p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
              Active in online marketplaces, I manage digital item reselling and utility services directly on Discord. PagePuff is built on that very same principle of providing lightning-fast, high-utility tools for everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
