"use client";

import { ToolsGrid } from "@/components/sections/home/ToolsGrid";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-100 pt-28 pb-6 md:pt-32 md:pb-8">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
            PagePuff PDF Tools
          </p>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl">
            Every PDF tool you&apos;ll ever need, right at your fingertips.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Launch Merge, Compress, Split, Convert, and more in seconds.
          </p>
        </div>
      </section>
      <ToolsGrid />
    </main>
  );
}
