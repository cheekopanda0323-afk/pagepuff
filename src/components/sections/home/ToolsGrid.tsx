"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tools, toolCategories } from "@/lib/constants";

export const ToolsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools =
    activeCategory === "all"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <section id="tools" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="scroll-reveal mb-12 text-center">
          <div className="text-primary bg-primary/10 mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wider uppercase">
            All-In-One Solution
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Powerful <span className="text-primary">PDF Tools</span>
          </h2>
          <p className="section-subtitle mx-auto text-xl font-medium italic">
            Everything you need to work with PDF files, completely free and
            100% private.
          </p>
        </div>

        {/* Category Filter - glass pill bar */}
        <div className="scroll-reveal mb-12 flex flex-wrap items-center justify-center gap-2 px-2 sm:gap-3">
          {toolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap backdrop-blur-xl transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                activeCategory === cat.id
                  ? "bg-primary border-primary shadow-primary/20 text-white shadow-lg"
                  : "border-border/80 bg-white text-gray-600 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid - responsive: 1 col mobile, 2 sm, 3 lg, 4 xl */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group border-border/70 relative flex min-h-[200px] flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white hover:shadow-2xl hover:shadow-black/10"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${tool.iconColor}`}
              >
                <tool.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                {tool.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {tool.description}
              </p>
              <div className="text-primary mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold tracking-widest uppercase opacity-0 transition-all duration-300 group-hover:opacity-100">
                Open Tool
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="py-16 text-center text-gray-500">
            No tools found in this category.
          </p>
        )}
      </div>
    </section>
  );
};
