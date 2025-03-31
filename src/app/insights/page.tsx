import Hero from "../../sections/insights/hero";
import FadeInDiv from "@/components/fade-in-div";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Superteam Germany",
  description:
    "Latest insights and updates from the Solana ecosystem in Germany.",
};

export default function Insights() {
  return (
    <div className="min-h-screen">
      <FadeInDiv>
        <Hero />
      </FadeInDiv>
    </div>
  );
}
