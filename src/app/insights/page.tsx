import Hero from "../../sections/insights/hero";
import FadeInDiv from "@/components/fade-in-div";
import type { Metadata } from "next";
import { createSocialMetadata } from "@/lib/social-metadata";

const title = "Insights";
const description =
  "Latest insights and updates from the Solana ecosystem in Germany.";
const socialMetadata = createSocialMetadata({
  title,
  description,
  path: "/insights",
});

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights" },
  openGraph: socialMetadata.openGraph,
  twitter: socialMetadata.twitter,
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
