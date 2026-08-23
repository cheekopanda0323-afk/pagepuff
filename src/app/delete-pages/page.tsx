import { Metadata } from "next";
import { DeletePagesClient } from "@/components/pages/delete-pages/DeletePagesClient";

export const metadata: Metadata = {
  title: "Delete Pages from PDF Online | Free & Secure",
  description:
    "Remove unwanted pages from any PDF in seconds. Select the pages to delete and download a clean, updated PDF - 100% free and private in your browser.",
  keywords: [
    "Delete PDF Pages",
    "Remove Pages from PDF",
    "PDF Page Remover",
    "Free PDF Tool",
    "PagePuff",
  ],
  openGraph: {
    title: "Delete Pages from PDF Online | PagePuff",
    description: "Remove unwanted pages from any PDF in seconds.",
    url: "https://pagepuff.com/delete-pages",
  },
};

export default function DeletePagesPage() {
  return <DeletePagesClient />;
}
