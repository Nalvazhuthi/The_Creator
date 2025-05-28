import React, { useEffect, useRef } from "react";

interface Partner {
  partnerIcon: string;
  joinDate: string;
  description: string;
}

interface SliderProps {
  values: Partner[];
}

const Slider: React.FC<SliderProps> = ({ values }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef(0);
  const slidesToScroll = 2; // Scroll 2 slides at a time

  // Duplicate slides for seamless infinite loop
  const loopValues = [...values, ...values];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstSlide = container.querySelector(".slide") as HTMLElement;
    if (firstSlide) {
      slideWidthRef.current = firstSlide.offsetWidth;
    }

    let scrollLeft = 0;

    const interval = setInterval(() => {
      if (!container || slideWidthRef.current === 0) return;

      scrollLeft += slideWidthRef.current * slidesToScroll;

      if (scrollLeft >= slideWidthRef.current * values.length) {
        // Reached the cloned section, reset instantly to beginning
        container.scrollLeft = 0;
        scrollLeft = slideWidthRef.current * slidesToScroll;
      }

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [values]);

  return (
    <div className="slider-wrapper" ref={containerRef}>
      <div className="slider-container">
        {loopValues.map((partner, index) => (
          <div className="slide" key={index}>
            <div className="slider-header">
              {partner.partnerIcon ? (
                <img
                  src={partner.partnerIcon}
                  alt={`Partner ${index + 1}`}
                  className="partner-icon"
                />
              ) : (
                <div>ic</div>
              )}
              <div className="partner-join-date">{partner.joinDate}</div>
            </div>
            <div className="partner-description">{partner.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
