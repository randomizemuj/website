import React, { useState, useEffect, useRef } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import useCarouselKeyboardNavigation from './useCarouselKeyboardNavigation'
import img1 from '/cp-workshop.jpg'
import img2 from '/fest.webp'
import img3 from '/github.jpg'
import img5 from '/hello-world.jpg'
import img6 from '/WebDevWS-1.jpg'
import img7 from '/hello-world-2024.jpg'

const images = [img2, img1, img3, img5, img6, img7]



const EmblaCarousel = (props) => {
  const containerRef = useRef();
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useCarouselKeyboardNavigation(containerRef, onPrevButtonClick, onNextButtonClick);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div ref ={containerRef} className='w-[93vw] ml-10 mh-[80vh] pt-[7%] pr-20 pl-[11%] pb-10 rounded-3xl max-sm:ml-5 caraouselContainer'>
      <section className="embla max-sm:mt-[0] mt-[-3rem] pl-[2rem]">
        <div className="embla__viewport rounded-3xl ml-[7rem] max-sm:ml-[-1.8rem] max-md:ml-[-3rem] max-lg:ml-[3rem]" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="embla__slide__img rounded-3xl max-sm:rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls max-sm:ml-[0rem] ml-[5rem] mt-[1.8rem] ">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          {!isMobile && (
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default EmblaCarousel
