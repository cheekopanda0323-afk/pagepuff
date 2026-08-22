"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { tools } from "@/lib/constants";

export const ToolsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return tools;
    return tools.filter((tool) =>
      `${tool.title} ${tool.description}`.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const quickTools = ["Merge PDF", "Compress PDF", "Split PDF", "Word to PDF"]
    .map((title) => tools.find((tool) => tool.title === title))
    .filter((tool): tool is (typeof tools)[number] => Boolean(tool));

  return (
    <section id="tools" className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
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
              placeholder="Search: Merge PDF, Word to PDF, Compress..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 text-sm text-black outline-none transition focus:border-black"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {quickTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-black hover:text-black"
              >
                {tool.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex min-h-[148px] flex-col rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-black transition-all duration-200 group-hover:bg-black group-hover:text-white">
                <tool.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-black md:text-base">
                {tool.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{tool.description}</p>
              <div className="mt-auto flex items-center pt-3 text-[11px] font-semibold tracking-wide text-gray-400 uppercase transition-colors group-hover:text-black">
                Open
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
        {filteredTools.length === 0 && (
          <p className="mt-6 rounded-xl border border-dashed border-gray-200 p-5 text-center text-sm text-gray-500">
            No matching tool found. Try searching for Merge, Split, Compress, or
            Convert.
          </p>
        )}
      </div>
    </section>
  );
};
