import { Metadata } from "next";
import CookiePolicyClient from "@/components/pages/legal/CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy | PagePuff",
  description:
    "Understand how PagePuff uses cookies to improve your experience and deliver personalized content.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}
