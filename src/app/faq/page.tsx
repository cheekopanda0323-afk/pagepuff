import { Metadata } from "next";
import FAQClient from "@/components/pages/faq/FAQClient";

export const metadata: Metadata = {
  title: "FAQ | PagePuff",
  description:
    "Get answers to frequently asked questions about PagePuff tools, privacy, security, and more.",
};

export default function FAQPage() {
  return <FAQClient />;
}
