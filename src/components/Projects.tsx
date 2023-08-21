import React from "react";
import Card from "./ui/Card";

const Projects = () => {
  return (
    <section className="flex justify-between container gap-4">
      <Card
        title="Builderz"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
      />
      <Card
        title="Triggr"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
      />
      <Card
        title="Bunkr"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
      />
      <Card
        title="Cavyar"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
      />
      <h2 className="ml-6 [writing-mode:vertical-rl] uppercase inline-block ">
        Our Projects
      </h2>
    </section>
  );
};

export default Projects;
