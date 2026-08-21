import { Metadata } from "next";
import AboutClient from "@/components/pages/about/AboutClient";

export const metadata: Metadata = {
  title: "About | Hassan Amjad - PagePuff",
  description:
    "Learn more about Hassan Amjad, the creator of PagePuff, and his mission to build polished, engaging digital realities.",
};

export default function AboutPage() {
  return <AboutClient />;
}
