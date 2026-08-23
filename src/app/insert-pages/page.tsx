import { Metadata } from "next";
import { InsertPagesClient } from "@/components/pages/insert-pages/InsertPagesClient";

export const metadata: Metadata = {
  title: "Insert Pages into PDF Online | Free & Secure",
  description:
    "Add pages from another PDF into your document at exactly the position you need. Fast, free, and 100% private - everything happens in your browser.",
  keywords: [
    "Insert PDF Pages",
    "Add Pages to PDF",
    "Combine PDF Pages",
    "Free PDF Tool",
    "PagePuff",
  ],
  openGraph: {
    title: "Insert Pages into PDF Online | PagePuff",
    description: "Add pages from another PDF at exactly the position you need.",
    url: "https://pagepuff.com/insert-pages",
  },
};

export default function InsertPagesPage() {
  return <InsertPagesClient />;
}
