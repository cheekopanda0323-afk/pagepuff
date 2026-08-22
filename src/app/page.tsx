"use client";

import dynamic from "next/dynamic";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Hero } from "@/components/sections/home/Hero";

// Keep the tool directory in the first paint. Less client JS here means faster
// first interaction and smoother scrolling on mobile devices.
const Stats = dynamic(
  () => import("@/components/sections/home/Stats").then((mod) => mod.Stats),
  { ssr: true }
);

const ToolsGrid = dynamic(
  () =>
    import("@/components/sections/home/ToolsGrid").then(
      (mod) => mod.ToolsGrid
    ),
  { ssr: true }
);

const Features = dynamic(
  () =>
    import("@/components/sections/home/Features").then(
      (mod) => mod.Features
    ),
  { ssr: true }
);

const CTA = dynamic(
  () => import("@/components/sections/home/CTA").then((mod) => mod.CTA),
  { ssr: true }
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/common/Testimonials").then(
      (mod) => mod.Testimonials
    ),
  { ssr: true }
);

export default function Home() {
  // Drives the .scroll-reveal / .stagger-up fade-in animations used across
  // Hero, ToolsGrid, Features, CTA and Testimonials. Without this call those
  // sections stay at opacity: 0 forever (they only get the "visible" class
  // once this observer sees them) — that's what caused the blank areas.
  useScrollReveal();

  return (
    <>
      <Hero />
      <Stats />
      <ToolsGrid />
      <Features />
      <CTA />
      <Testimonials />
    </>
  );
}
