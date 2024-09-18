import type { Options as SplideOptions } from "@splidejs/react-splide";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { heroSectionsSlides } from "../../../utils/slides/constants";
import HeroSlide from "./HeroSlide";

const slideInterval = 3000;
const slideOptions: SplideOptions = {
  type: "fade",
  rewind: true,
  live: true,
  autoplay: true,
  arrows: false,
  pagination: false,
  interval: slideInterval + 100,
  autoHeight: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  classes: {
    prev: "splide__arrow--prev absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md",
    next: "splide__arrow--next absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
  }
};

const HeroSection = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  const handleMove = () => {
    setProgressWidth(0);
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgressWidth((prevWidth) => prevWidth + 1);
    }, slideInterval / 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="relative w-full md:w-fit md:h-fit bg-[#f5f5f5] h-auto flex flex-col items-center justify-center pb-10 md:pb-0">
      <div className="md:w-3/4 w-full h-fit flex items-center justify-center md:p-10">
        <div className="text-left w-full">
          <Splide className="splide" options={slideOptions} onMove={handleMove}>
            {heroSectionsSlides.map((slide, index) => (
              <HeroSlide key={index} {...slide} />
            ))}
          </Splide>
        </div>
      </div>
      <div
        className="absolute left-0 bottom-0 h-1 bg-cpink"
        style={{
          width: `${progressWidth}%`,
          transition: "width 0.1s linear"
        }}
      />
    </div>
  );
};

export default HeroSection;
