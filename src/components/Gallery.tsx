import Carousel from "./Carousel";

const Gallery = () => {
  const images = [
    { link: "", imgUrl: "/images/placeholder-2.png", date: "" },
    { link: "", imgUrl: "/images/placeholder-1.png", date: "" },
    { link: "", imgUrl: "/images/placeholder-2.png", date: "" },
  ];
  return (
    <section className="container">
      <h2 className="uppercase py-24">How we roll</h2>
      <Carousel images={images} />
    </section>
  );
};

export default Gallery;
