"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Layers, 
  Scissors, 
  Minimize, 
  RefreshCw, 
  FileText, 
  Edit3, 
  Lock, 
  Unlock, 
  Sparkles,
  Search,
  ArrowRight
} from "lucide-react";

const toolsData = [
  { name: "Merge PDF", desc: "Combine PDFs in the order you want with the easiest PDF merger.", href: "/merge-pdf", category: "organize", icon: Layers, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "Split PDF", desc: "Separate one page or a whole set for easy conversion into files.", href: "/split-pdf", category: "organize", icon: Scissors, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "Compress PDF", desc: "Reduce file size while optimizing for maximal PDF quality.", href: "/compress-pdf", category: "optimize", icon: Minimize, color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { name: "Repair PDF", desc: "Repair a damaged PDF and recover data from corrupt files.", href: "/repair-pdf", category: "optimize", icon: RefreshCw, color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { name: "Word to PDF", desc: "Make DOC and DOCX files easy to read by converting to PDF.", href: "/word-to-pdf", category: "convert", icon: FileText, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "JPG to PDF", desc: "Convert JPG images to PDF in seconds with custom orientations.", href: "/jpg-to-pdf", category: "convert", icon: FileText, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  { name: "Edit PDF", desc: "Add text, images, shapes or freehand annotations effortlessly.", href: "/edit-pdf", category: "edit", icon: Edit3, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { name: "Protect PDF", desc: "Protect PDF files with a password to prevent unauthorized access.", href: "/protect-pdf", category: "security", icon: Lock, color: "bg-red-500/10 text-red-500 border-red-500/20" },
  { name: "Unlock PDF", desc: "Remove PDF password security giving you full document freedom.", href: "/unlock-pdf", category: "security", icon: Unlock, color: "bg-red-500/10 text-red-500 border-red-500/20" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "organize", label: "Organize PDF" },
  { id: "optimize", label: "Optimize PDF" },
  { id: "convert", label: "Convert PDF" },
  { id: "edit", label: "Edit PDF" },
  { id: "security", label: "PDF Security" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = toolsData.filter(tool => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Every tool you need to work with <span className="text-orange-500">PDFs</span> in one place
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Every tool you need to use PDFs, at your fingertips. 100% FREE and lightning fast!
        </p>

        {/* Search Bar Widget */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search for a PDF tool (e.g. Merge, Compress...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white/80 py-3.5 pr-4 pl-12 text-sm shadow-sm backdrop-blur-md transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-gray-800 dark:bg-black/80 dark:text-white"
            />
          </div>
        </div>

        {/* Category Pills (iLovePDF Style) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-black text-white shadow-lg dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <Link
                key={idx}
                href={tool.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/80"
              >
                <div>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${tool.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {tool.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Get Started</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 dark:text-gray-400">No tools found matching your search.</p>
          </div>
        )}
      </section>

    </div>
  );
}
