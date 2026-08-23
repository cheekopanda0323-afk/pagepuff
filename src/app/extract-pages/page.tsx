import { Metadata } from "next";
import { ExtractPagesClient } from "@/components/pages/extract-pages/ExtractPagesClient";

export const metadata: Metadata = {
  title: "Extract Pages from PDF Online | Free & Secure",
  description:
    "Pull out the exact pages you need from a PDF and save them as a new file. Fast, free, and 100% private - everything happens in your browser.",
  keywords: [
    "Extract PDF Pages",
    "Get Pages from PDF",
    "PDF Page Extractor",
    "Free PDF Tool",
    "PagePuff",
  ],
  openGraph: {
    title: "Extract Pages from PDF Online | PagePuff",
    description:
      "Pull out exactly the pages you need from any PDF in seconds.",
    url: "https://pagepuff.com/extract-pages",
  },
};

export default function ExtractPagesPage() {
  return <ExtractPagesClient />;
}
