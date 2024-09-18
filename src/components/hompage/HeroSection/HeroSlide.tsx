import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

interface HeroSlideProps {
  text: string;
  image: string;
  link: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image, link, text }) => {
  return (
    <SplideSlide className="relative flex items-center justify-center gap-6 md:flex-row flex-col-reverse md:h-auto h-full">
      <div className="md:w-1/2 md:max-w-lg w-full px-4 md:px-0">
        <h1 className="text-black font-bold text-3xl md:text-5xl leading-tight">
          {text}
        </h1>
        <Link
          to={link}
          className="inline-block mt-8 px-8 py-3 bg-cyellow text-black text-md font-bold rounded-md shadow-md hover:bg-cyellow/80 transition duration-300 ease-in-out"
        >
          Go To The Products
        </Link>
      </div>
      <div
        className="md:w-1/2 md:h-full w-full h-48 rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom"
        }}
      ></div>
    </SplideSlide>
  );
};

export default HeroSlide;
