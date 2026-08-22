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
    <section id="tools" className="relative overflow-hidden bg-[#FAFBFF] py-9 sm:py-12 md:py-14">
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-7 text-center sm:mb-8">
          <div className="text-primary mb-3 inline-block rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-[10px] font-bold tracking-wider uppercase sm:px-4 sm:py-1.5 sm:text-xs">
            All-In-One Solution
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Powerful <span className="text-primary">PDF Tools</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base md:text-lg">
            Everything you need to work with PDF files, completely free and
            100% private.
          </p>
        </div>

        {/* Category Filter - glass pill bar */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2 px-1 sm:mb-8 sm:gap-2.5">
          {toolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 sm:px-5 sm:py-2.5 sm:text-sm ${
                activeCategory === cat.id
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid - responsive: 1 col mobile, 2 sm, 3 lg, 4 xl */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative flex min-h-[160px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_10px_28px_rgba(79,70,229,0.08)] sm:min-h-[178px] sm:rounded-3xl sm:p-5"
            >
              <div
                className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-150 group-hover:scale-105 ${tool.iconColor} sm:h-12 sm:w-12 sm:rounded-2xl`}
              >
                <tool.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-1.5 text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                {tool.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-500 sm:text-sm">
                {tool.description}
              </p>
              <div className="text-primary mt-auto hidden items-center gap-1.5 pt-4 text-xs font-bold tracking-widest uppercase sm:flex">
                Open Tool
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="py-16 text-center text-slate-500">
            No tools found in this category.
          </p>
        )}
      </div>
    </section>
  );
};
