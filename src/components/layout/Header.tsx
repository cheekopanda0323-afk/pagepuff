"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  FileText, 
  Layers, 
  Scissors, 
  Minimize, 
  RefreshCw, 
  Edit3, 
  Lock, 
  Cpu, 
  ChevronDown, 
  Menu, 
  X 
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-black/80">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2" title="PagePuff">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/30">
            PP
          </div>
          <span className="text-xl font-bold tracking-tight">PagePuff</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* All Tools Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              All PDF tools
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega Menu Dropdown */}
            {toolsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-3 gap-6 rounded-3xl border border-gray-100 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl dark:border-gray-800 dark:bg-black/95">
                  <div>
                    <div className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Organize PDF</div>
                    <ul className="space-y-2">
                      <li><Link href="/merge-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 dark:text-gray-300"><Layers className="h-4 w-4 text-orange-500" /> Merge PDF</Link></li>
                      <li><Link href="/split-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 dark:text-gray-300"><Scissors className="h-4 w-4 text-orange-500" /> Split PDF</Link></li>
                      <li><Link href="/organize-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 dark:text-gray-300"><FileText className="h-4 w-4 text-orange-500" /> Organize PDF</Link></li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Optimize PDF</div>
                    <ul className="space-y-2">
                      <li><Link href="/compress-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-500 dark:text-gray-300"><Minimize className="h-4 w-4 text-green-500" /> Compress PDF</Link></li>
                      <li><Link href="/repair-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-500 dark:text-gray-300"><RefreshCw className="h-4 w-4 text-green-500" /> Repair PDF</Link></li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Convert & Edit</div>
                    <ul className="space-y-2">
                      <li><Link href="/word-to-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500 dark:text-gray-300"><FileText className="h-4 w-4 text-blue-500" /> Word to PDF</Link></li>
                      <li><Link href="/edit-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-500 dark:text-gray-300"><Edit3 className="h-4 w-4 text-purple-500" /> Edit PDF</Link></li>
                      <li><Link href="/protect-pdf" className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 dark:text-gray-300"><Lock className="h-4 w-4 text-red-500" /> Protect PDF</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Pricing</Link>
        </nav>

        {/* Actions (Login / Signup with Glassmorphism) */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
            Login
          </Link>
          <Link href="/register" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600">
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-xl p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-gray-100 bg-white/95 p-6 shadow-xl backdrop-blur-2xl md:hidden dark:border-gray-800 dark:bg-black/95">
          <div className="flex flex-col gap-4">
            <Link href="/merge-pdf" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Merge PDF</Link>
            <Link href="/split-pdf" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Split PDF</Link>
            <Link href="/compress-pdf" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Compress PDF</Link>
            <Link href="/edit-pdf" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium">Edit PDF</Link>
            <div className="my-2 h-px bg-gray-100 dark:bg-gray-800" />
            <div className="flex gap-3">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 rounded-xl border border-gray-200 py-2.5 text-center text-sm font-medium dark:border-gray-700">Login</Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="flex-1 rounded-xl bg-orange-500 py-2.5 text-center text-sm font-medium text-white shadow-md">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
