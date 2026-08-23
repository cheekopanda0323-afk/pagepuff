import { Metadata } from "next";
import { ReorderPagesClient } from "@/components/pages/reorder-pages/ReorderPagesClient";

export const metadata: Metadata = {
  title: "Reorder PDF Pages Online | Free & Secure",
  description:
    "Drag and drop to rearrange the pages of your PDF into any order you want. Fast, free, and 100% private - everything happens in your browser.",
  keywords: [
    "Reorder PDF Pages",
    "Rearrange PDF Pages",
    "Sort PDF Pages",
    "Free PDF Tool",
    "PagePuff",
  ],
  openGraph: {
    title: "Reorder PDF Pages Online | PagePuff",
    description: "Rearrange the pages of your PDF into any order you want.",
    url: "https://pagepuff.com/reorder-pages",
  },
};

export default function ReorderPagesPage() {
  return <ReorderPagesClient />;
}
