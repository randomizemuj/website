import React, { useState, useEffect, useRef } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import useCarouselKeyboardNavigation from "./useCarouselKeyboardNavigation";

// ✅ Using URLs directly instead of import statements
const images = [
  "https://res.cloudinary.com/randomize/image/upload/v1737914588/Website/Events/fest_mbjr9x.jpg",
  "https://res.cloudinary.com/randomize/image/upload/v1737912586/Website/Events/cp-workshop_gheuws.jpg",
  "https://res.cloudinary.com/randomize/image/upload/v1737912590/Website/Events/GitHub_Workshop_ttcyex.png",
  "https://res.cloudinary.com/randomize/image/upload/v1737912586/Website/Events/hello-world_bh9wc9.jpg",
  "https://res.cloudinary.com/randomize/image/upload/v1737912595/Website/Events/hello-world-2024_cahxla.png",
  "https://res.cloudinary.com/randomize/image/upload/v1737912597/Website/Events/ANN_Class_bjcrhy.png",
  "https://res.cloudinary.com/randomize/image/upload/v1737912589/Website/Events/freshman-meetup_eorghl.png",
  "https://res.cloudinary.com/randomize/image/upload/v1737912591/Website/Events/WebDevWS-2_zzidyh.png",
  "https://res.cloudinary.com/randomize/image/upload/v1737912587/Website/Events/WebDevWS-1_srdxwm.jpg",
];

const EmblaCarousel = (props) => {
  const containerRef = useRef();
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useCarouselKeyboardNavigation(
    containerRef,
    onPrevButtonClick,
    onNextButtonClick
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[93vw] ml-10 mh-[80vh] pt-[7%] pr-20 pl-[11%] pb-10 rounded-3xl max-sm:ml-5 caraouselContainer"
    >
      <section className="embla max-sm:mt-[0] mt-[-3rem] pl-[2rem]">
        <div
          className="embla__viewport rounded-3xl ml-[7rem] max-sm:ml-[-1.8rem] max-md:ml-[-3rem] max-lg:ml-[3rem]"
          ref={emblaRef}
        >
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="embla__slide__img rounded-3xl max-sm:rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls max-sm:ml-[0rem] ml-[5rem] mt-[1.8rem] ">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          {!isMobile && (
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;
