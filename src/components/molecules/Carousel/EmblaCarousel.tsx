import Reveal from "../../atoms/Reveal";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const OPTIONS = { dragFree: true }; // Caousel Options
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys()); // Slides

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi!!);


  return (
    <section className="embla flex items-center flex-row-reverse ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls w-[40%]">
        <Reveal>
          <h1 className="w-full md:w-auto lg:w-[40%] text-4xl leading-12 font-recoleta-medium">
            Talent that <span className="text-secondary">companies</span> are
            lookin for
          </h1>
        </Reveal>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        /> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
