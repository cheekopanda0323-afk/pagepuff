"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { tools } from "@/lib/constants";

export const HOME_TOOL_CATEGORIES = [
  "All",
  "Organize PDF",
  "Optimize PDF",
  "Convert PDF",
  "Edit PDF",
  "PDF Security",
] as const;

export type HomeToolCategory = (typeof HOME_TOOL_CATEGORIES)[number];

type ToolsGridProps = {
  activeCategory: HomeToolCategory;
};

const getToolCategory = (href: string): Exclude<HomeToolCategory, "All"> => {
  if (["/unlock-pdf", "/protect-pdf"].includes(href)) {
    return "PDF Security";
  }

  if (
    [
      "/merge-pdf",
      "/split-pdf",
      "/extract-pages",
      "/delete-pages",
      "/reorder-pages",
      "/rotate-pdf",
      "/duplicate-pages",
      "/insert-pages",
      "/organize-pdf",
    ].includes(href)
  ) {
    return "Organize PDF";
  }

  if (["/compress-pdf", "/repair-pdf"].includes(href)) {
    return "Optimize PDF";
  }

  if (
    ["/watermark-pdf", "/sign-pdf", "/edit-pdf", "/edit-metadata", "/ocr-pdf"].includes(
      href
    )
  ) {
    return "Edit PDF";
  }

  return "Convert PDF";
};

const categoryIconShell: Record<Exclude<HomeToolCategory, "All">, string> = {
  "Organize PDF": "from-rose-500 to-orange-500 shadow-rose-500/20",
  "Optimize PDF": "from-emerald-500 to-lime-500 shadow-emerald-500/20",
  "Convert PDF": "from-blue-500 to-cyan-500 shadow-blue-500/20",
  "Edit PDF": "from-violet-500 to-fuchsia-500 shadow-violet-500/20",
  "PDF Security": "from-amber-500 to-yellow-500 shadow-amber-500/20",
};

export const ToolsGrid = ({ activeCategory }: ToolsGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesSearch =
        !term ||
        `${tool.title} ${tool.description}`.toLowerCase().includes(term);
      const matchesCategory =
        activeCategory === "All" ||
        getToolCategory(tool.href) === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="tools" className="pb-10 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <label
            htmlFor="tool-search"
            className="mb-2 block text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase"
          >
            Find a tool instantly
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="tool-search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search tools"
              className="h-11 w-full rounded-2xl border border-white/60 bg-white/80 pl-10 text-sm text-gray-900 shadow-lg shadow-sky-100/60 outline-none backdrop-blur-xl transition focus:border-blue-300"
            />
          </div>
        </div>

        <motion.div
          layout
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const category = getToolCategory(tool.href);

              return (
                <motion.div
                  key={tool.href}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link
                    href={tool.href}
                    className="group flex min-h-[160px] flex-col rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg shadow-slate-100/80 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg ${categoryIconShell[category]}`}
                    >
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-[15px] font-bold tracking-tight text-gray-900">
                      {tool.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-600">
                      {tool.description}
                    </p>
                    <div className="mt-auto flex items-center pt-3 text-[11px] font-semibold tracking-wide text-gray-500 uppercase transition-colors group-hover:text-gray-900">
                      Open Tool
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredTools.length === 0 && (
          <p className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-center text-sm text-gray-500 backdrop-blur-xl">
            No matching tool found for this category.
          </p>
        )}
      </div>
    </section>
  );
};
