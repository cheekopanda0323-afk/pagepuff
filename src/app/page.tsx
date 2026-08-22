import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/home/Hero";

// Keep the tool directory in the first paint. Less client JS here means faster
// first interaction and smoother scrolling on mobile devices.
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
  return (
    <>
      <Hero />
      <ToolsGrid />
      <Features />
      <CTA />
      <Testimonials />
    </>
  );
}
