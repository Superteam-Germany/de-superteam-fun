import FadeInDiv from "@/components/ui/FadeInDiv";
import Carousel from "../../components/Carousel";

const Gallery = () => {
  const images = [
    { link: "", imgUrl: "/images/carousel/gallery-3.jpg", date: "" },
    { link: "", imgUrl: "/images/carousel/gallery-1.jpg", date: "" },
    { link: "", imgUrl: "/images/carousel/gallery-2.jpg", date: "" },
  ];
  return (
    <section className="">
      <FadeInDiv>
        <div className="container">
          <h2 className="uppercase py-24 text-shadow">How we roll</h2>
        </div>
        <Carousel images={images} />
      </FadeInDiv>
    </section>
  );
};

export default Gallery;
