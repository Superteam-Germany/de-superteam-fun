import React from "react";
import { Highlight } from "../../components/highlight";
import { clsx } from "clsx";
import { Button } from "@/components/button";
import { BlurredCard } from "@/components/blurred-card";
import NewsletterForm from "@/components/newsletter-form";
import { NewsletterGroup } from "@/types/enum";

const benefits = [
  {
    highlight: "Boost Your Odds:",
    text: "Superteam submissions have better chances to score and higher visibility.",
  },
  {
    highlight: "Expert Support:",
    text: "Workshops, pitch feedback, and intros to mentors/experienced founders.",
  },
  {
    highlight: "Massive Exposure:",
    text: "Demo Day streamed to thousands, plus X resharing by SuperteamDE.",
  },
  {
    highlight: "Prizes & Beyond:",
    text: "Win local prices in cash, score globally and higher chances to get investment.",
  },
  {
    highlight: "Network That Lasts:",
    text: "Connect with partners, teammates, and other founders.",
  },
];

const WhatIs = () => {
  return (
    <section className="container">
      <BlurredCard className="lg:mt-32 lg:px-16 py-24">
        {/* <Subheading>Meet the team</Subheading> */}
        <h3 className="mt-2">Why Build with Superteam Germany?</h3>
        <p className="'text-2xl font-medium text-blue-100 text-">
          We provide resources, mentorship and connect you with like-minded
          people to support you in your hackathon journey and beyond.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <ul className="space-y-6 text-lg max-w-xl mx-auto">
              {benefits.map((benefit) => (
                <li key={benefit.highlight} className="text-white">
                  <span className="font-bold">{benefit.highlight}</span>
                  <span className="text-gray-400"> {benefit.text}</span>
                </li>
              ))}
            </ul>
            {/* <div className="mt-6">
            <NewsletterForm group={NewsletterGroup.BUILDSTATION} title='RSVP for Buildstation' />
            </div> */}
            <div className="mt-8"></div>
            {/* <Button
              onClick={() =>
                window.open("https://lu.ma/buildstation", "_blank")
              }
            >
              Register for Build Station
            </Button> */}
            <Button>Register for Build Station (soon)</Button>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/images/hackathon/group.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </BlurredCard>
    </section>
  );
};

export default WhatIs;
