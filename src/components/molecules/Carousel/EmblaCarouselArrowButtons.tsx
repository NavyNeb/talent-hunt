import { EmblaCarouselType } from "embla-carousel";
import { ReactNode, useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi: EmblaCarouselType) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props: {
  children?: ReactNode;
  onClick: () => void;
  disabled: boolean;
  restProps?: any;
}) => {
  const { children, onClick, disabled, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="-1"
          x2="23"
          y2="-1"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 25 9)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="-1"
          x2="8.33176"
          y2="-1"
          transform="matrix(-0.644081 0.764958 0.644081 0.764958 7 2)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="-1"
          x2="8.13243"
          y2="-1"
          transform="matrix(-0.735278 -0.677765 -0.547036 0.837109 7 14.6567)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton = (props: {
  children?: ReactNode;
  onClick: () => void;
  disabled: boolean;
  restProps?: any;
}) => {
  const { children, onClick, disabled, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="8"
          x2="23"
          y2="8"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="-1"
          x2="8.33176"
          y2="-1"
          transform="matrix(0.644081 0.764958 -0.644081 0.764958 18 2)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="-1"
          x2="8.13243"
          y2="-1"
          transform="matrix(0.735278 -0.677765 0.547036 0.837109 18 14.6567)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      {children}
    </button>
  );
};
