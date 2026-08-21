import { Metadata } from "next";
import ChangelogClient from "@/components/pages/changelog/ChangelogClient";

export const metadata: Metadata = {
  title: "Changelog | PagePuff",
  description:
    "Stay updated with the latest features, improvements, and updates to PagePuff.",
};

export default function ChangelogPage() {
  return <ChangelogClient />;
}
