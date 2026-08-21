import { Metadata } from "next";
import TermsClient from "@/components/pages/legal/TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | PagePuff",
  description:
    "Read the Terms of Service for using PagePuff's free online PDF tools.",
};

export default function TermsPage() {
  return <TermsClient />;
}
