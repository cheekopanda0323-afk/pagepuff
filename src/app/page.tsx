"use client";

import { useState } from "react";
import {
  ToolsGrid,
  HOME_TOOL_CATEGORIES,
  type HomeToolCategory,
} from "@/components/sections/home/ToolsGrid";
import { motion } from "framer-motion";

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<HomeToolCategory>("All");

  return (
    <main className="relative overflow-hidden bg-linear-to-b from-sky-50/70 via-white to-white">
      <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-8 right-0 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl" />

      <section className="border-b border-white/60 pt-28 pb-6 md:pt-32 md:pb-8">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
            PagePuff PDF Tools
          </p>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Every PDF tool you need, in one lightning-fast workspace.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Merge, split, compress, convert, edit, and protect your documents in
            seconds.
          </p>

          <div className="mt-6 -mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2">
              {HOME_TOOL_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "border-transparent bg-linear-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-300/30"
                      : "border-white/70 bg-white/70 text-gray-700 backdrop-blur-xl hover:border-sky-200 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm text-gray-500"
          >
            Showing: <span className="font-semibold text-gray-800">{activeCategory}</span>
          </motion.p>
        </div>
      </section>

      <ToolsGrid activeCategory={activeCategory} />
    </main>
  );
}
