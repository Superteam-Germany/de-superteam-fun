import Hero from "../sections/home/hero";
import WhatIsSuperteam from "../sections/home/what-is-superteam";
import FadeInDiv from "@/components/fade-in-div";
import { Suspense } from "react";
import WhatWeDo from "../sections/home/what-we-do";
import NewsletterSection from "../sections/home/newsletter-section";
import { Events } from "../sections/home/events";
import type { Metadata } from "next";
import TrustedBy from "../sections/home/trusted-by";

export const metadata: Metadata = {
  title: { absolute: "Superteam Germany | Solana Builders, Founders & Startups" },
  description:
    "Superteam Germany helps Solana builders and founders launch, grow, raise capital, hire talent and connect through events across Germany.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <FadeInDiv>
        <Hero />
      </FadeInDiv>
      <Suspense>
        <WhatIsSuperteam />
      </Suspense>
      {/* <Events /> */}
      <TrustedBy />
      <WhatWeDo />
      {/* <NewsletterSection /> */}
    </div>
  );
}
