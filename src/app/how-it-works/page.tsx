import { Metadata } from "next";
import HowItWorksClient from "@/components/pages/how-it-works/HowItWorksClient";

export const metadata: Metadata = {
  title: "How It Works | PagePuff",
  description:
    "Learn how PagePuff processes your files locally and securely in your browser.",
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
